import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-special-top-rounded',
    styleUrl: 'coreproject-special-top-rounded.css',
    shadow: true,
})
export class CoreprojectSpecialTopRounded {
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
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0V24C0 10.7451 10.7461 0 24 0Z" fill="currentColor" />
                </svg>
            </Host>
        );
    }
}
