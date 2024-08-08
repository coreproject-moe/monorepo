import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-dot',
    styleUrl: 'coreproject-shape-dot.css',
    shadow: true,
})
export class CoreprojectShapeDot {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                </svg>
            </Host>
        );
    }
}
