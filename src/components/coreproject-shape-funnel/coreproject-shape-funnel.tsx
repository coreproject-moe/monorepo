import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-funnel',
    styleUrl: 'coreproject-shape-funnel.css',
    shadow: true,
})
export class CoreprojectShapeFunnel {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 2.25H1.5L7.5 9.345V14.25L10.5 15.75V9.345L16.5 2.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
