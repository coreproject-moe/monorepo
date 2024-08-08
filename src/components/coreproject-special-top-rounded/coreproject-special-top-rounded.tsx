import { Component, Prop, Host, h } from '@stencil/core';

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

    componentDidLoad() {
        if (this.svg_element) this.svg_element.setAttribute('style', this._style);
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
