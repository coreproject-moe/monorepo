
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-tool',
    shadow: true,
    styleUrl: 'coreproject-shape-tool.css',
})
export class CoreprojectShapeTool {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    


    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3752 7.87516C18.1462 8.10882 18.0179 8.42297 18.0179 8.75016C18.0179 9.07735 18.1462 9.3915 18.3752 9.62516L20.3752 11.6252C20.6088 11.8542 20.923 11.9825 21.2502 11.9825C21.5774 11.9825 21.8915 11.8542 22.1252 11.6252L26.8377 6.91266C27.4662 8.30164 27.6565 9.8492 27.3833 11.3491C27.11 12.849 26.3861 14.23 25.308 15.308C24.23 16.386 22.849 17.1099 21.3491 17.3832C19.8492 17.6565 18.3017 17.4662 16.9127 16.8377L8.27519 25.4752C7.7779 25.9724 7.10345 26.2518 6.40019 26.2518C5.69692 26.2518 5.02247 25.9724 4.52519 25.4752C4.0279 24.9779 3.74854 24.3034 3.74854 23.6002C3.74854 22.8969 4.0279 22.2224 4.52519 21.7252L13.1627 13.0877C12.5341 11.6987 12.3438 10.1511 12.6171 8.65123C12.8904 7.15134 13.6143 5.77035 14.6923 4.69231C15.7704 3.61427 17.1514 2.89037 18.6513 2.61709C20.1511 2.3438 21.6987 2.53411 23.0877 3.16266L18.3877 7.86266L18.3752 7.87516Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }
}
