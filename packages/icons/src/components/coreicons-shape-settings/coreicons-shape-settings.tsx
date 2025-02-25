import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-settings',
    shadow: true,
    styleUrl: 'coreicons-shape-settings.scss'
})
export class CoreiconsShapeSettings {
    @Prop() width?: string | number;
    @Prop() height?: string | number;
    @Prop() variant!: 'outline' | 'filled';

    componentWillLoad() {
        if (!['outline', 'filled'].includes(this.variant))
            throw new Error(
                `'coreicons-shape-settings' (${this.variant}) not in ['outline', 'filled']`
            );
    }

    render() {
        if (this.variant === 'outline') {
            return (
                <Host>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height={this?.height}
                        width={this?.width}
                        part="svg"
                        coreproject-icon-r=""
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'filled') {
            return (
                <Host>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height={this?.height}
                        width={this?.width}
                        part="svg"
                        coreproject-icon-r=""
                    >
                        <path
                            d="M20.6035 13.4275C20.407 13.2716 20.3077 13.0224 20.3311 12.7703C20.3546 12.5193 20.3696 12.2647 20.3696 12C20.3696 11.7353 20.3546 11.4807 20.3311 11.2297C20.3077 10.9776 20.407 10.7285 20.6035 10.5726L22.7814 8.844C23.006 8.664 23.0651 8.34 22.9233 8.07601L20.5587 3.92401C20.4168 3.66 20.0976 3.56401 19.8376 3.66L17.2696 4.70681C17.0366 4.80175 16.7729 4.76287 16.5674 4.61645C16.156 4.32318 15.7237 4.06642 15.2673 3.8495C15.0396 3.74127 14.8738 3.52886 14.838 3.27621L14.4465 0.504001C14.411 0.216 14.1627 0 13.8671 0H9.13807C8.8425 0 8.59422 0.216 8.55876 0.504001L8.16712 3.27621C8.13143 3.52886 7.96554 3.74121 7.73819 3.85023C7.2806 4.06968 6.84732 4.33158 6.43508 4.62259C6.23155 4.76626 5.971 4.80274 5.74096 4.70897L3.16766 3.66C2.89575 3.552 2.58836 3.66 2.44649 3.92401L0.0819646 8.07601C-0.0717242 8.34 -0.000788855 8.664 0.223835 8.844L2.40161 10.5726C2.59812 10.7285 2.69757 10.9776 2.67425 11.2297C2.6507 11.4843 2.63564 11.7421 2.63564 12C2.63564 12.2579 2.6507 12.5157 2.67425 12.7703C2.69757 13.0224 2.59812 13.2716 2.40161 13.4275L0.223835 15.1561C-0.000788855 15.3361 -0.0599064 15.6601 0.0819646 15.924L2.44649 20.076C2.58836 20.3401 2.90757 20.436 3.16766 20.3401L5.73565 19.2932C5.96856 19.1983 6.23234 19.2372 6.43773 19.3836C6.84908 19.6768 7.28136 19.9336 7.73785 20.1506C7.96559 20.2587 8.13143 20.4711 8.16712 20.7239L8.55876 23.496C8.59422 23.784 8.8425 24 9.13807 24H13.8671C14.1627 24 14.411 23.784 14.4465 23.496L14.838 20.7239C14.8738 20.4711 15.0396 20.2589 15.2671 20.1497C15.7246 19.9304 16.1579 19.6685 16.5701 19.3774C16.7736 19.2337 17.0342 19.1973 17.2642 19.291L19.8376 20.3401C20.1094 20.4481 20.4168 20.3401 20.5587 20.076L22.9233 15.924C23.0651 15.6601 23.006 15.3361 22.7814 15.1561L20.6035 13.4275ZM11.5027 16.2001C9.22083 16.2001 7.36469 14.316 7.36469 12C7.36469 9.68402 9.22083 7.8 11.5027 7.8C13.7844 7.8 15.6405 9.68402 15.6405 12C15.6405 14.316 13.7844 16.2001 11.5027 16.2001Z"
                            fill="currentColor"
                        />
                    </svg>
                </Host>
            );
        }
    }
}
