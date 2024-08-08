import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-play',
    styleUrl: 'coreproject-shape-play.css',
    shadow: true,
})
export class CoreprojectShapePlay {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        this.svg_element.setAttribute('style', this._style);
    }
    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16675 2.5L15.8334 10L4.16675 17.5V2.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
