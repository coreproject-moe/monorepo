import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-arrow-up-right',
    styleUrl: 'coreproject-shape-arrow-up-right.css',
    shadow: true,
})
export class CoreprojectShapeArrowUpRight {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66699 11.3333L11.3337 4.66666" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.66699 4.66666H11.3337V11.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
