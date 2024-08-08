import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-chevron',
    styleUrl: 'coreproject-shape-chevron.css',
    shadow: true,
})
export class CoreprojectShapeChevron {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 9L12 15L18 9" />
                </svg>
            </Host>
        );
    }
}
