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
        <e-text>Login if you already have an account</e-text>
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
        <e-text>If you sign up, you accept our T&C and privacy policy</e-text>
      </Host>
    );
  }
}
