import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-strike',
    styleUrl: 'coreproject-shape-strike.css',
    shadow: true,
})
export class CoreprojectShapeStrike {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string, _oldValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.1818 4.5H12.2572C14.6518 4.49998 16.06 5.70029 16.6667 6.27002C17.0694 6.64806 17.0893 7.28091 16.7112 7.68353C16.3332 8.08615 15.7003 8.10606 15.2977 7.72803C14.8402 7.2984 13.9043 6.5 12.2572 6.5H12.1818C11.3372 6.5 10.5747 7.0042 10.2433 7.78217C9.76004 8.91658 10.3492 10.2218 11.5197 10.6097L12.6975 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H8.84183C8.04044 9.87767 7.81744 8.37359 8.40331 6.99832C9.04851 5.48375 10.5346 4.5 12.1818 4.5ZM14.3007 14H16.6374C17.0712 15.0358 17.1365 16.2306 16.7304 17.3744C16.0672 19.2426 14.2995 20.4908 12.317 20.4908H11.725C9.84848 20.4908 8.54549 19.8758 7.31543 18.7208C6.91281 18.3428 6.8929 17.7099 7.27094 17.3073C7.64899 16.9047 8.28183 16.8848 8.68445 17.2628C9.58301 18.1065 10.4086 18.4908 11.725 18.4908H12.317C13.4529 18.4908 14.4657 17.7757 14.8456 16.7053C15.1889 15.7383 14.9443 14.7076 14.3007 14Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
