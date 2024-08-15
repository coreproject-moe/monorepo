import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-alert-triangle',
    styleUrl: 'coreproject-shape-alert-triangle.css',
    shadow: true,
})
export class CoreprojectShapeAlertTriangle {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    @Watch('height')
    watchHeight(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.8625 4.82501L2.27497 22.5C2.05668 22.878 1.94117 23.3066 1.93995 23.7432C1.93873 24.1797 2.05183 24.6089 2.268 24.9882C2.48417 25.3674 2.79587 25.6834 3.1721 25.9048C3.54833 26.1262 3.97596 26.2452 4.41247 26.25H25.5875C26.024 26.2452 26.4516 26.1262 26.8278 25.9048C27.2041 25.6834 27.5158 25.3674 27.7319 24.9882C27.9481 24.6089 28.0612 24.1797 28.06 23.7432C28.0588 23.3066 27.9433 22.878 27.725 22.5L17.1375 4.82501C16.9146 4.45764 16.6009 4.15391 16.2265 3.94312C15.8521 3.73232 15.4296 3.62158 15 3.62158C14.5703 3.62158 14.1479 3.73232 13.7735 3.94312C13.3991 4.15391 13.0853 4.45764 12.8625 4.82501V4.82501Z"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path d="M15 11.25V16.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 21.25H15.0125" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
