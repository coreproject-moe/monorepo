import { Component, Host, h, Prop, Watch } from '@stencil/core';

import { css_to_jsx } from '$utils/css_to_jsx';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-play-circle',
    styleUrl: 'coreproject-shape-play-circle.css',
    shadow: true,
})
export class CoreprojectShapePlayCircle {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    @Watch('height')
    watchHeight(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${this.height} is not a string or a number string`);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${this.height} is not a string or a number string`);
    }

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9615 7.89235C13.1685 7.73214 13.3361 7.52665 13.4513 7.29164C13.5666 7.05663 13.6266 6.79834 13.6266 6.53658C13.6266 6.27482 13.5666 6.01653 13.4513 5.78152C13.3361 5.54651 13.1685 5.34102 12.9615 5.18081C10.2808 3.10657 7.28748 1.47165 4.09351 0.337231L3.50952 0.129752C2.39342 -0.266427 1.21383 0.488369 1.06269 1.64113C0.640479 4.89111 0.640479 8.18205 1.06269 11.432C1.21473 12.5848 2.39342 13.3396 3.50952 12.9434L4.09351 12.7359C7.28748 11.6015 10.2808 9.96659 12.9615 7.89235Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
