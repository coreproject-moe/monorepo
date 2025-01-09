import { Component, Prop, h, State } from '@stencil/core';
import WebTorrent from 'webtorrent/dist/webtorrent.min.js';
// import sw from 'webtorrent/dist/sw.min.js';

@Component({
    tag: 'core-video-player',
    styleUrl: 'core-video-player.css',
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
            // const swPath = process.env.NODE_ENV === 'development' ? '/sw.min.js' : './sw.min.js'
            // console.log('hey', swPath, process.env.NODE_ENV)

            navigator.serviceWorker
                .register(
                    `data:application/javascript;base64,KCgpPT57InVzZSBzdHJpY3QiO2xldCBlPSExO3NlbGYuYWRkRXZlbnRMaXN0ZW5lcigiaW5zdGFsbCIsKCk9PntzZWxmLnNraXBXYWl0aW5nKCl9KSxzZWxmLmFkZEV2ZW50TGlzdGVuZXIoImZldGNoIix0PT57bGV0IG49KHQ9PntsZXR7dXJsOm59PXQucmVxdWVzdDtyZXR1cm4gbi5pbmNsdWRlcyhzZWxmLnJlZ2lzdHJhdGlvbi5zY29wZSsid2VidG9ycmVudC8iKT9uLmluY2x1ZGVzKHNlbGYucmVnaXN0cmF0aW9uLnNjb3BlKyJ3ZWJ0b3JyZW50L2tlZXBhbGl2ZS8iKT9uZXcgUmVzcG9uc2U6bi5pbmNsdWRlcyhzZWxmLnJlZ2lzdHJhdGlvbi5zY29wZSsid2VidG9ycmVudC9jYW5jZWwvIik/bmV3IFJlc3BvbnNlKG5ldyBSZWFkYWJsZVN0cmVhbSh7Y2FuY2VsKCl7ZT0hMH19KSk6YXN5bmMgZnVuY3Rpb24oe3JlcXVlc3Q6dH0pe2xldHt1cmw6bixtZXRob2Q6cyxoZWFkZXJzOnIsZGVzdGluYXRpb246b309dCxhPWF3YWl0IGNsaWVudHMubWF0Y2hBbGwoe3R5cGU6IndpbmRvdyIsaW5jbHVkZVVuY29udHJvbGxlZDohMH0pLFtpLGxdPWF3YWl0IG5ldyBQcm9taXNlKGU9Pntmb3IobGV0IHQgb2YgYSl7bGV0IGk9bmV3IE1lc3NhZ2VDaGFubmVsLHtwb3J0MTpsLHBvcnQyOmN9PWk7bC5vbm1lc3NhZ2U9KHtkYXRhOnR9KT0+e2UoW3QsbF0pfSx0LnBvc3RNZXNzYWdlKHt1cmw6bixtZXRob2Q6cyxoZWFkZXJzOk9iamVjdC5mcm9tRW50cmllcyhyLmVudHJpZXMoKSksc2NvcGU6c2VsZi5yZWdpc3RyYXRpb24uc2NvcGUsZGVzdGluYXRpb246byx0eXBlOiJ3ZWJ0b3JyZW50In0sW2NdKX19KSxjPW51bGwsZD0oKT0+e2wucG9zdE1lc3NhZ2UoITEpLGNsZWFyVGltZW91dChjKSxsLm9ubWVzc2FnZT1udWxsfTtyZXR1cm4iU1RSRUFNIiE9PWkuYm9keT8oZCgpLG5ldyBSZXNwb25zZShpLmJvZHksaSkpOm5ldyBSZXNwb25zZShuZXcgUmVhZGFibGVTdHJlYW0oe3B1bGw6dD0+bmV3IFByb21pc2Uobj0+e2wub25tZXNzYWdlPSh7ZGF0YTplfSk9PntlP3QuZW5xdWV1ZShlKTooZCgpLHQuY2xvc2UoKSksbigpfSxlfHwoY2xlYXJUaW1lb3V0KGMpLCJkb2N1bWVudCIhPT1vJiYoYz1zZXRUaW1lb3V0KCgpPT57ZCgpLG4oKX0sNWUzKSkpLGwucG9zdE1lc3NhZ2UoITApfSksY2FuY2VsKCl7ZCgpfX0pLGkpfSh0KTpudWxsfSkodCk7biYmdC5yZXNwb25kV2l0aChuKX0pLHNlbGYuYWRkRXZlbnRMaXN0ZW5lcigiYWN0aXZhdGUiLCgpPT57c2VsZi5jbGllbnRzLmNsYWltKCl9KX0pKCk7`
                )
                // .register('https://cdn.jsdelivr.net/npm/webtorrent/dist/sw.min.js')
                .then((reg) => {
                    const worker = reg.active || reg.waiting || reg.installing;
                    const checkState = (worker: ServiceWorker) => {
                        return (
                            worker.state === 'activated' &&
                            this.client.createServer({ controller: reg }) &&
                            this.streamVideo()
                        );
                    };
                    if (!checkState(worker)) {
                        worker.addEventListener('statechange', (event) =>
                            checkState(event.target as ServiceWorker)
                        );
                    }
                });
        } catch (err) {
            console.error(err);
        }
    }

    disconnectedCallback() {
        if (this.client) {
            this.client.destroy();
            console.log('webtorrent client destroyed');
        }
    }

    private streamVideo() {
        if (!this.magnet || !this.client) return false;

        console.log('adding torrent with magnet:', this.magnet);
        this.client.add(this.magnet, (torrent) => {
            console.log('client is downloading:', torrent.infoHash);
            const file = torrent.files.find((file) =>
                file.name.match(/\.(mp4|mkv|webm)$/i)
            );
            if (file) {
                console.log('file', file);
                // @ts-ignore: doesnt include new version on @types/webtorrent
                file.streamTo(this.videoElement, () => {
                    this.loading = false;
                    console.log('video is streaming');
                    return true;
                });
            } else {
                console.log('no playable video fount');
            }
        });
    }

    render() {
        return (
            <div>
                <video
                    ref={(el) => (this.videoElement = el)}
                    controls
                    style={{ width: '100%', height: 'auto' }}
                ></video>
            </div>
        );
    }
}
