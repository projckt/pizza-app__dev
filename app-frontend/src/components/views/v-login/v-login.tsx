import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-login',
  styleUrl: 'v-login.css',
  shadow: true,
})
export class VLogin {
  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display">Login</e-text>
          <e-text>
            Not registered yet? <e-link href="/signup">Sign up</e-link>
          </e-text>
          <l-spacer value={1.5}></l-spacer>
          <e-input type="email" name="email" placeholder="Email"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-input type="password" name="password" placeholder="Password"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-button>Login</e-button>
          <l-spacer value={1}></l-spacer>
          <e-link href="/forgot-password">Forgot Password</e-link>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <e-text>
            By logging in, you accept <br /> our{' '}
            <e-link href="https://aitihyatheheritage.in/terms-of-service.html" target="_blank">
              terms
            </e-link>{' '}
            &{' '}
            <e-link href="https://aitihyatheheritage.in/cancellation-refund-policy.html" target="_blank">
              privacy policy
            </e-link>
          </e-text>{' '}
        </c-card>
      </Host>
    );
  }
}
