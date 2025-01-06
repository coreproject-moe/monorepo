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
      navigator.serviceWorker.register('/sw.min.js', { scope: './' }).then(reg => {
        const worker = reg.active || reg.waiting || reg.installing
        function checkState(worker: ServiceWorker) {
          console.log('check passed', worker.state)
          return worker.state === 'activated';
        }
        if (!checkState(worker)) {
          worker.addEventListener('statechange', ({ target }) => checkState(target as ServiceWorker))
        } else {
          this.client.createServer({ controller: reg })
          this.streamVideo()
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
    if (!this.magnet || !this.client) return;

    console.log("adding torrent with magnet:", this.magnet);
    this.client.add(this.magnet, (torrent) => {
      console.log("client is downloading:", torrent.infoHash);
      const file = torrent.files.find((file) => file.name.match(/\.(mp4|mkv|webm)$/i));
      if (file) {
        // @ts-ignore: doesnt include new version on @types/webtorrent
        file.streamTo(this.videoElement, () => {
          this.loading = false;
          console.log("video is streaming");
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
          autoPlay
          preload="none"
          style={{ width: "100%", height: "auto" }}
        ></video>
      </div>
    );
  }
}
