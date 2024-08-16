import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-refresh-cw',
    shadow: true,
    styleUrl: 'coreproject-shape-refresh-cw.css',
})
export class CoreprojectShapeRefreshCw {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_445)">
                        <path d="M28.75 5V12.5H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.25 25V17.5H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M4.3875 11.25C5.02146 9.45845 6.09892 7.85673 7.51933 6.59425C8.93975 5.33176 10.6568 4.44968 12.5104 4.0303C14.3639 3.61091 16.2934 3.6679 18.119 4.19594C19.9445 4.72398 21.6066 5.70586 22.95 7.04997L28.75 12.5M1.25 17.5L7.05 22.95C8.39343 24.2941 10.0555 25.276 11.881 25.804C13.7066 26.332 15.6361 26.389 17.4896 25.9697C19.3432 25.5503 21.0602 24.6682 22.4807 23.4057C23.9011 22.1432 24.9785 20.5415 25.6125 18.75"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_583_445">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
