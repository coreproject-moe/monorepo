
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-settings',
    shadow: true,
    styleUrl: 'coreproject-shape-settings.css',
})
export class CoreprojectShapeSettings {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_464)" filter="url(#filter0_d_583_464)">
<path d="M19 18.75C21.0711 18.75 22.75 17.0711 22.75 15C22.75 12.9289 21.0711 11.25 19 11.25C16.9289 11.25 15.25 12.9289 15.25 15C15.25 17.0711 16.9289 18.75 19 18.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.25 18.75C28.0836 19.127 28.034 19.5452 28.1075 19.9507C28.181 20.3562 28.3743 20.7304 28.6625 21.025L28.7375 21.1C28.9699 21.3322 29.1543 21.6079 29.2801 21.9114C29.406 22.2149 29.4707 22.5402 29.4707 22.8688C29.4707 23.1973 29.406 23.5226 29.2801 23.8261C29.1543 24.1296 28.9699 24.4053 28.7375 24.6375C28.5053 24.8699 28.2296 25.0543 27.9261 25.1801C27.6226 25.306 27.2973 25.3707 26.9688 25.3707C26.6402 25.3707 26.3149 25.306 26.0114 25.1801C25.7079 25.0543 25.4322 24.8699 25.2 24.6375L25.125 24.5625C24.8304 24.2743 24.4562 24.081 24.0507 24.0075C23.6452 23.934 23.227 23.9836 22.85 24.15C22.4803 24.3085 22.165 24.5716 21.9429 24.9069C21.7208 25.2423 21.6016 25.6353 21.6 26.0375V26.25C21.6 26.913 21.3366 27.5489 20.8678 28.0178C20.3989 28.4866 19.763 28.75 19.1 28.75C18.437 28.75 17.8011 28.4866 17.3322 28.0178C16.8634 27.5489 16.6 26.913 16.6 26.25V26.1375C16.5903 25.7238 16.4564 25.3225 16.2156 24.9859C15.9749 24.6493 15.6384 24.3929 15.25 24.25C14.873 24.0836 14.4548 24.034 14.0493 24.1075C13.6438 24.181 13.2696 24.3743 12.975 24.6625L12.9 24.7375C12.6678 24.9699 12.3921 25.1543 12.0886 25.2801C11.7851 25.406 11.4598 25.4707 11.1312 25.4707C10.8027 25.4707 10.4774 25.406 10.1739 25.2801C9.8704 25.1543 9.59468 24.9699 9.3625 24.7375C9.13006 24.5053 8.94566 24.2296 8.81985 23.9261C8.69404 23.6226 8.62928 23.2973 8.62928 22.9688C8.62928 22.6402 8.69404 22.3149 8.81985 22.0114C8.94566 21.7079 9.13006 21.4322 9.3625 21.2L9.4375 21.125C9.72567 20.8304 9.91898 20.4562 9.99251 20.0507C10.066 19.6452 10.0164 19.227 9.85 18.85C9.69155 18.4803 9.42844 18.165 9.09308 17.9429C8.75772 17.7208 8.36473 17.6016 7.9625 17.6H7.75C7.08696 17.6 6.45107 17.3366 5.98223 16.8678C5.51339 16.3989 5.25 15.763 5.25 15.1C5.25 14.437 5.51339 13.8011 5.98223 13.3322C6.45107 12.8634 7.08696 12.6 7.75 12.6H7.8625C8.27624 12.5903 8.67751 12.4564 9.01412 12.2156C9.35074 11.9749 9.60714 11.6384 9.75 11.25C9.91639 10.873 9.96603 10.4548 9.89251 10.0493C9.81898 9.64377 9.62567 9.2696 9.3375 8.975L9.2625 8.9C9.03006 8.66782 8.84566 8.3921 8.71985 8.0886C8.59404 7.78511 8.52928 7.45979 8.52928 7.13125C8.52928 6.80271 8.59404 6.47739 8.71985 6.1739C8.84566 5.8704 9.03006 5.59468 9.2625 5.3625C9.49468 5.13006 9.7704 4.94566 10.0739 4.81985C10.3774 4.69404 10.7027 4.62928 11.0312 4.62928C11.3598 4.62928 11.6851 4.69404 11.9886 4.81985C12.2921 4.94566 12.5678 5.13006 12.8 5.3625L12.875 5.4375C13.1696 5.72567 13.5438 5.91898 13.9493 5.99251C14.3548 6.06603 14.773 6.01639 15.15 5.85H15.25C15.6197 5.69155 15.935 5.42844 16.1571 5.09308C16.3792 4.75772 16.4984 4.36473 16.5 3.9625V3.75C16.5 3.08696 16.7634 2.45107 17.2322 1.98223C17.7011 1.51339 18.337 1.25 19 1.25C19.663 1.25 20.2989 1.51339 20.7678 1.98223C21.2366 2.45107 21.5 3.08696 21.5 3.75V3.8625C21.5016 4.26473 21.6208 4.65772 21.8429 4.99308C22.065 5.32844 22.3803 5.59155 22.75 5.75C23.127 5.91639 23.5452 5.96603 23.9507 5.89251C24.3562 5.81898 24.7304 5.62567 25.025 5.3375L25.1 5.2625C25.3322 5.03006 25.6079 4.84566 25.9114 4.71985C26.2149 4.59404 26.5402 4.52928 26.8688 4.52928C27.1973 4.52928 27.5226 4.59404 27.8261 4.71985C28.1296 4.84566 28.4053 5.03006 28.6375 5.2625C28.8699 5.49468 29.0543 5.7704 29.1801 6.0739C29.306 6.37739 29.3707 6.70271 29.3707 7.03125C29.3707 7.35979 29.306 7.68511 29.1801 7.9886C29.0543 8.2921 28.8699 8.56782 28.6375 8.8L28.5625 8.875C28.2743 9.1696 28.081 9.54377 28.0075 9.94926C27.934 10.3548 27.9836 10.773 28.15 11.15V11.25C28.3085 11.6197 28.5716 11.935 28.9069 12.1571C29.2423 12.3792 29.6353 12.4984 30.0375 12.5H30.25C30.913 12.5 31.5489 12.7634 32.0178 13.2322C32.4866 13.7011 32.75 14.337 32.75 15C32.75 15.663 32.4866 16.2989 32.0178 16.7678C31.5489 17.2366 30.913 17.5 30.25 17.5H30.1375C29.7353 17.5016 29.3423 17.6208 29.0069 17.8429C28.6716 18.065 28.4085 18.3803 28.25 18.75V18.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_464" x="0" y="0"   filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_464"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_464" result="shape"/>
</filter>
<clipPath id="clip0_583_464">
<rect   fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>
</Host>)
    }
}
