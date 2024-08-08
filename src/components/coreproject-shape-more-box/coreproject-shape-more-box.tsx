import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-more-box',
    styleUrl: 'coreproject-shape-more-box.css',
    shadow: true,
})
export class CoreprojectShapeMoreBox {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" rx="2" fill="currentColor" />
                    <rect x="12" width="8" height="8" rx="2" fill="currentColor" />
                    <rect x="12" y="12" width="8" height="8" rx="2" fill="currentColor" />
                    <rect y="12" width="8" height="8" rx="2" fill="currentColor" />
                </svg>
            </Host>
        );
    }
}
