import { Component, Prop, h, State } from "@stencil/core";
import { streamVideo, destroyClient } from '../../workers/torrent.worker'

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  private videoElement: HTMLVideoElement | null = null;

  @Prop() magnet: string;

  @State() loading: boolean = true;

  async connectedCallback() {
    if (!this.magnet) return;
    try {
      // console.log(this.magnet);
      // this.client = new window.WebTorrent();
      // console.log("webtorrent client initialized");
      // this.streamVideo();
      const url = await streamVideo(this.magnet)
      console.log('url', url)
      this.videoElement.src = url
      this.loading = false
    } catch (err) {
      console.error(err);
      this.loading = false
    }
  }

  disconnectedCallback() {
    // if (this.client) {
    //   this.client.destroy();
    //   console.log("webtorrent client destroyed");
    // }
    destroyClient()
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
