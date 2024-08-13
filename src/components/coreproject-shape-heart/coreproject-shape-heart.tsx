import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-heart',
    styleUrl: 'coreproject-shape-heart.css',
    shadow: true,
})
export class CoreprojectShapeHeart {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string, _oldValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.4201 2.30506C10.1647 2.04956 9.86147 1.84688 9.52774 1.7086C9.19401 1.57032 8.8363 1.49915 8.47506 1.49915C8.11382 1.49915 7.75611 1.57032 7.42238 1.7086C7.08865 1.84688 6.78544 2.04956 6.53006 2.30506L6.00006 2.83506L5.47006 2.30506C4.95421 1.78921 4.25458 1.49941 3.52506 1.49941C2.79554 1.49941 2.09591 1.78921 1.58006 2.30506C1.06421 2.8209 0.774414 3.52054 0.774414 4.25006C0.774414 4.97957 1.06421 5.67921 1.58006 6.19506L2.11006 6.72506L6.00006 10.6151L9.89006 6.72506L10.4201 6.19506C10.6756 5.93968 10.8782 5.63647 11.0165 5.30274C11.1548 4.96901 11.226 4.6113 11.226 4.25006C11.226 3.88881 11.1548 3.53111 11.0165 3.19738C10.8782 2.86365 10.6756 2.56044 10.4201 2.30506Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
