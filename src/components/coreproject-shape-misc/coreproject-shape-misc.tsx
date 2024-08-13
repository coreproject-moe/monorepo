import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-misc',
    styleUrl: 'coreproject-shape-misc.css',
    shadow: true,
})
export class CoreprojectShapeMisc {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.00033 0.666656C4.40033 0.666656 0.666992 4.39999 0.666992 8.99999C0.666992 13.6 4.40033 17.3333 9.00033 17.3333C13.6003 17.3333 17.3337 13.6 17.3337 8.99999C17.3337 4.39999 13.6003 0.666656 9.00033 0.666656ZM9.00033 15.6667C5.32533 15.6667 2.33366 12.675 2.33366 8.99999C2.33366 5.32499 5.32533 2.33332 9.00033 2.33332C12.6753 2.33332 15.667 5.32499 15.667 8.99999C15.667 12.675 12.6753 15.6667 9.00033 15.6667ZM8.16699 12.3333H9.83366V14H8.16699V12.3333ZM9.50866 4.03332C7.79199 3.78332 6.27533 4.84166 5.81699 6.35832C5.66699 6.84166 6.03366 7.33332 6.54199 7.33332H6.70866C7.05033 7.33332 7.32533 7.09166 7.44199 6.77499C7.70866 6.03332 8.50033 5.52499 9.35866 5.70832C10.1503 5.87499 10.7337 6.64999 10.667 7.45832C10.5837 8.57499 9.31699 8.81666 8.62533 9.85832C8.62533 9.86666 8.61699 9.86666 8.61699 9.87499C8.60866 9.89166 8.60033 9.89999 8.59199 9.91666C8.51699 10.0417 8.44199 10.1833 8.38366 10.3333C8.37533 10.3583 8.35866 10.375 8.35033 10.4C8.34199 10.4167 8.34199 10.4333 8.33366 10.4583C8.23366 10.7417 8.16699 11.0833 8.16699 11.5H9.83366C9.83366 11.15 9.92533 10.8583 10.067 10.6083C10.0837 10.5833 10.092 10.5583 10.1087 10.5333C10.1753 10.4167 10.2587 10.3083 10.342 10.2083C10.3503 10.2 10.3587 10.1833 10.367 10.175C10.4503 10.075 10.542 9.98332 10.642 9.89166C11.442 9.13332 12.5253 8.51666 12.3003 6.92499C12.1003 5.47499 10.9587 4.24999 9.50866 4.03332Z"
                        fill="white"
                    />
                </svg>
            </Host>
        );
    }
}
