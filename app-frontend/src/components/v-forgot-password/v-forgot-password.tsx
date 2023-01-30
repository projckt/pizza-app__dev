import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-forgot-password',
  styleUrl: 'v-forgot-password.css',
  shadow: true,
})
export class VForgotPassword {
  render() {
    return (
      <Host>
        Forgot Password
        <slot></slot>
      </Host>
    );
  }
}
