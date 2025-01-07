import { Component, Prop, h, State } from "@stencil/core";
import WebTorrent from 'webtorrent/dist/webtorrent.min.js';

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  private videoElement: HTMLVideoElement | null = null;

  @Prop() magnet: string;

  @State() loading: boolean = true;
  @State() client: WebTorrent.Instance | null = null;

  async connectedCallback() {
    if (!this.magnet) return;
    try {
      // console.log(this.magnet);
      this.client = new WebTorrent();
      const swPath = process.env.NODE_ENV === 'development' ? '/sw.min.js' : './sw.min.js'
      navigator.serviceWorker.register(swPath, { scope: './' }).then(reg => {
        const worker = reg.active || reg.waiting || reg.installing
        const checkState = (worker: ServiceWorker) => {
          return worker.state === 'activated' && this.client.createServer({ controller: reg }) && this.streamVideo()
        }
        if (!checkState(worker)) {
          worker.addEventListener('statechange', (event) => checkState(event.target as ServiceWorker))
        }
      })
    } catch (err) {
      console.error(err);
    }
  }

  disconnectedCallback() {
    if (this.client) {
      this.client.destroy();
      console.log("webtorrent client destroyed");
    }
  }

  private streamVideo() {
    if (!this.magnet || !this.client) return false;

    console.log("adding torrent with magnet:", this.magnet);
    this.client.add(this.magnet, (torrent) => {
      console.log("client is downloading:", torrent.infoHash);
      const file = torrent.files.find((file) => file.name.match(/\.(mp4|mkv|webm)$/i));
      if (file) {
        console.log('file', file)
        // @ts-ignore: doesnt include new version on @types/webtorrent
        file.streamTo(this.videoElement, () => {
          this.loading = false;
          console.log("video is streaming");
          return true
        });
      } else {
        console.log("no playable video fount");
      }
    });
  }

  render() {
    return (
      <div>
        <video
          ref={(el) => (this.videoElement = el)}
          controls
          style={{ width: "100%", height: "auto" }}
        ></video>
      </div>
    );
  }
}
