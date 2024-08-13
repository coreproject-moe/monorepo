import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-tick',
    styleUrl: 'coreproject-shape-tick.css',
    shadow: true,
})
export class CoreprojectShapeTick {
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
                <svg
                    ref={el => (this.svg_element = el as SVGElement)}
                    width={this?.width}
                    height={this?.height}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    baseProfile="basic"
                >
                    <polygon fill="currentColor" points="5.857,14.844 0.172,9.032 3.031,6.235 5.888,9.156 12.984,2.06 15.812,4.888" />
                </svg>
            </Host>
        );
    }
}
