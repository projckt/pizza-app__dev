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
        <e-text variant="display">Login</e-text>
        <l-spacer value={0.5}></l-spacer>
        <e-text>Sign up if you do not have an account</e-text>
        <l-spacer value={1.5}></l-spacer>
        <e-input type="email" name="email" placeholder="Email"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-input type="password" name="password" placeholder="Password"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-button>Login</e-button>
        <l-spacer value={1.5}></l-spacer>
        <l-seperator></l-seperator>
        <l-spacer value={1}></l-spacer>
        <e-text>If you log in, you accept our T&C and privacy policy</e-text>
      </Host>
    );
  }
}
