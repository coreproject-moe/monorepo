import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-dice',
    styleUrl: 'coreproject-shape-dice.css',
    shadow: true,
})
export class CoreprojectShapeDice {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.1637 0.31654C7.41746 0.169639 7.70548 0.0922852 7.9987 0.0922852C8.29191 0.0922852 8.57994 0.169639 8.8337 0.31654L15.0837 3.93487C15.3366 4.08129 15.5466 4.29164 15.6926 4.54482C15.8385 4.79801 15.9154 5.08512 15.9154 5.37737V12.6224C15.9152 12.9145 15.8383 13.2014 15.6924 13.4545C15.5464 13.7075 15.3365 13.9177 15.0837 14.064L8.8337 17.6832C8.57994 17.8301 8.29191 17.9075 7.9987 17.9075C7.70548 17.9075 7.41746 17.8301 7.1637 17.6832L0.913698 14.0649C0.660772 13.9185 0.450791 13.7081 0.304819 13.4549C0.158847 13.2017 0.0820158 12.9146 0.0820313 12.6224V5.37737C0.0821619 5.08526 0.159063 4.79832 0.305028 4.5453C0.450993 4.29227 0.660894 4.08205 0.913698 3.93571L7.1637 0.31654ZM1.3737 5.74321C1.31034 5.70643 1.2384 5.68701 1.16514 5.6869C1.09187 5.6868 1.01988 5.70601 0.95641 5.7426C0.892942 5.77919 0.840245 5.83188 0.803631 5.89533C0.767017 5.95879 0.747782 6.03078 0.747865 6.10404V11.6615C0.747995 11.9536 0.824897 12.2406 0.970861 12.4936C1.11683 12.7466 1.32673 12.9569 1.57953 13.1032L7.43024 16.6516C7.49355 16.6883 7.56541 16.7077 7.6386 16.7079C7.71179 16.708 7.78373 16.6889 7.84717 16.6524C7.91062 16.6159 7.96333 16.5633 8 16.5C8.03667 16.4367 8.05601 16.3648 8.05608 16.2916L7.99786 9.96071C7.99773 9.6686 7.92083 9.38165 7.77487 9.12863C7.6289 8.8756 7.419 8.66539 7.1662 8.51904L1.3737 5.74321ZM11.1379 3.59737C10.7395 3.36737 10.0929 3.36737 9.69453 3.59737C9.2962 3.82737 9.2962 4.20071 9.69453 4.43071C10.0929 4.66071 10.7395 4.66071 11.1379 4.43071C11.5362 4.20071 11.5362 3.82737 11.1379 3.59737ZM6.30453 3.59737C5.9062 3.36737 5.25953 3.36737 4.8612 3.59737C4.46286 3.82737 4.46286 4.20071 4.8612 4.43071C5.25953 4.66071 5.9062 4.66071 6.30453 4.43071C6.7037 4.20071 6.7037 3.82737 6.30453 3.59737ZM12.1587 12.204C12.6562 11.9165 13.0604 11.2174 13.0604 10.6415C13.0604 10.0665 12.6562 9.83321 12.1587 10.1207C11.6604 10.4082 11.2562 11.1082 11.2562 11.6832C11.2562 12.2582 11.6612 12.4915 12.1587 12.204ZM3.30287 9.16654C3.7012 9.39737 4.02453 9.21071 4.02453 8.74987C4.02453 8.28987 3.7012 7.73071 3.30287 7.49987C2.90453 7.26987 2.5812 7.45654 2.5812 7.91654C2.5812 8.37737 2.90453 8.93654 3.30287 9.16654ZM6.9112 13.7482C6.9112 14.2082 6.58703 14.3949 6.1887 14.1649C5.79036 13.9349 5.46703 13.3749 5.46703 12.9149C5.46703 12.4549 5.79036 12.2682 6.1887 12.4982C6.58703 12.7282 6.9112 13.2882 6.9112 13.7482ZM4.02453 12.0832C4.02453 12.544 3.7012 12.7307 3.30287 12.4999C2.90453 12.2699 2.5812 11.7107 2.5812 11.2499C2.5812 10.7899 2.90453 10.6032 3.30287 10.8332C3.7012 11.064 4.02453 11.6232 4.02453 12.0832ZM6.91037 10.4165C6.91037 10.8774 6.58703 11.064 6.1887 10.8332C5.78953 10.604 5.46703 10.044 5.46703 9.58321C5.46703 9.12404 5.78953 8.93737 6.1887 9.16654C6.58703 9.39737 6.91037 9.95737 6.91037 10.4165Z"
                        fill="currentColor"
                    />
                </svg>
            </Host>
        );
    }
}
