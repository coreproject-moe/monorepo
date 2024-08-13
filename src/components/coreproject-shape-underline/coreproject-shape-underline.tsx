import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-underline',
    styleUrl: 'coreproject-shape-underline.css',
    shadow: true,
})
export class CoreprojectShapeUnderline {
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
                <svg
                    ref={el => (this.svg_element = el as SVGElement)}
                    width={this?.width}
                    height={this?.height}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                    enable-background="new 0 0 52 52"
                    xmlSpace="preserve"
                >
                    <path d="M44.5,42h-37C6.7,42,6,42.7,6,43.5v3C6,47.3,6.7,48,7.5,48h37c0.8,0,1.5-0.7,1.5-1.5v-3C46,42.7,45.3,42,44.5,42z" />
                    <g>
                        <path d="M25.3,38C17.8,37.6,12,31.1,12,23.6L12,10c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2l0,13.7c0,4.3,3.2,8,7.5,8.3c4.7,0.3,8.5-3.4,8.5-8V10c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2v14C40,32,33.3,38.4,25.3,38z" />
                    </g>
                </svg>
            </Host>
        );
    }
}
