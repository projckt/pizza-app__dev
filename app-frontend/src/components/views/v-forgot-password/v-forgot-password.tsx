import { Component, State, Host, h } from '@stencil/core';

@Component({
  tag: 'v-forgot-password',
  styleUrl: 'v-forgot-password.css',
  shadow: true,
})
export class VForgotPassword {
  @State() compState: string = 'init';

  render() {
    return (
      <Host>
        <e-text variant="display">Forgot Password</e-text>
        <l-spacer value={0.5}></l-spacer>
        <l-spacer value={1.5}></l-spacer>
        <e-text>Enter your email, we will send you the password reset link</e-text>
        <l-spacer value={1}></l-spacer>
        <e-input type="email" name="email" placeholder="Email"></e-input>
        <l-spacer value={1}></l-spacer>
        <e-button>Send reset link</e-button>
      </Host>
    );
  }
}
