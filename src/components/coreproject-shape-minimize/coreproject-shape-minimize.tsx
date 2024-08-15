import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-minimize',
  styleUrl: 'coreproject-shape-minimize.css',
  shadow: true,
})
export class CoreprojectShapeMinimize {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
