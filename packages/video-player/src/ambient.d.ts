export {};
import Webtorrent from "webtorrent";

declare global {
	interface Window {
		WebTorrent: typeof Webtorrent; // You can add custom properties to window
	}
}
