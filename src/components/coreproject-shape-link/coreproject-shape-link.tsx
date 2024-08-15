
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-link',
    shadow: true,
    styleUrl: 'coreproject-shape-link.css',
})
export class CoreprojectShapeLink {

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

    render(){
        
        return(
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 16.25C13.0368 16.9676 13.7217 17.5614 14.5082 17.9911C15.2947 18.4208 16.1644 18.6764 17.0583 18.7404C17.9522 18.8044 18.8495 18.6754 19.6892 18.3622C20.5289 18.049 21.2914 17.5588 21.925 16.925L25.675 13.175C26.8135 11.9962 27.4435 10.4174 27.4292 8.7787C27.415 7.13997 26.7577 5.57239 25.5989 4.41359C24.4401 3.25479 22.8725 2.59748 21.2338 2.58324C19.595 2.569 18.0163 3.19897 16.8375 4.33746L14.6875 6.47496" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4998 13.75C16.9629 13.0324 16.2781 12.4386 15.4916 12.0089C14.7051 11.5792 13.8354 11.3236 12.9414 11.2596C12.0475 11.1956 11.1503 11.3246 10.3106 11.6378C9.47088 11.951 8.70837 12.4412 8.07476 13.075L4.32476 16.825C3.18627 18.0038 2.55631 19.5826 2.57055 21.2213C2.58479 22.86 3.24209 24.4276 4.4009 25.5864C5.5597 26.7452 7.12727 27.4025 8.766 27.4168C10.4047 27.431 11.9835 26.801 13.1623 25.6625L15.2998 23.525" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

