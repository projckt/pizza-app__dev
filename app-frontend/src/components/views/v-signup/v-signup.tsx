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
        <c-card>
          <e-text variant="display">Sign up</e-text>
          <e-text>
            Already have an account? <e-link href="/login">Login</e-link>
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
            By signing up, you accept <br />
            our{' '}
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
