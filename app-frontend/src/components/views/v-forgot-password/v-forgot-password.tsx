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
        <c-card>
          {' '}
          <e-text variant="display">Forgot Password</e-text>
          <e-text>Enter your email, we will send you the password reset link</e-text>
          <l-spacer value={2}></l-spacer>
          <e-input type="email" name="email" placeholder="Email"></e-input>
          <l-spacer value={2}></l-spacer>
          <l-row justifyContent="space-between">
            <e-text variant="footnote">
              <e-link href="/login">&lt; Back</e-link>
            </e-text>
            <e-button>Send reset link</e-button>
          </l-row>
        </c-card>
      </Host>
    );
  }
}
