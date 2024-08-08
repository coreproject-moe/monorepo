import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-code',
    styleUrl: 'coreproject-shape-code.css',
    shadow: true,
})
export class CoreprojectShapeCode {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        this.svg_element?.setAttribute('style', this._style);
    }
    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L3 12L8 16M16 16L21 12L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
