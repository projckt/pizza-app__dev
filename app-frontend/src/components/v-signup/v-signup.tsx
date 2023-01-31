import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-signup',
  styleUrl: 'v-signup.css',
  shadow: true,
})
export class VSignup {
  render() {
    return (
      <Host>
        <e-text variant="display">Sign up</e-text>
        <l-spacer value={0.5}></l-spacer>
        <e-text>
          <e-link href="/login">Login</e-link> if you already have an account
        </e-text>
        <l-spacer value={1.5}></l-spacer>
        <e-input type="text" name="firstName" placeholder="First name"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-input type="text" name="lastName" placeholder="Last name"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-input type="email" name="email" placeholder="Email"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-button>Sign up</e-button>
        <l-spacer value={1.5}></l-spacer>
        <l-seperator></l-seperator>
        <l-spacer value={1}></l-spacer>
        <e-text>
          If you log in, you accept our{' '}
          <e-link href="https://aitihyatheheritage.in/terms-of-service.html" target="_blank">
            TOS
          </e-link>{' '}
          and{' '}
          <e-link href="https://aitihyatheheritage.in/cancellation-refund-policy.html" target="_blank">
            privacy policy
          </e-link>
        </e-text>{' '}
      </Host>
    );
  }
}
