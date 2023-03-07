import { Component, Host, Listen, h } from '@stencil/core';
import { helper_Validate_LoginInputs, generate_Login_Payload } from './helpers';

@Component({
  tag: 'v-login',
  styleUrl: 'v-login.css',
  shadow: true,
})
export class VLogin {
  private email: string = '';
  private password: string = '';

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'password') {
      this.password = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'submit_LoginInputs') {
      this.handle_Submit_LoginInputs();
    }
  }

  handle_Submit_LoginInputs() {
    let payload_LoginInputs = generate_Login_Payload(this.email, this.password);
    let { isValid_LoginInputs, message } = helper_Validate_LoginInputs(payload_LoginInputs);

    if (!isValid_LoginInputs) {
      return alert(message);
    }

    console.log('LoginInputs valid');

    // send LoginInputs to server
  }

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display">Login</e-text>
          <e-text>
            Not registered? <e-link href="/signup">Sign up</e-link>
          </e-text>
          <l-spacer value={1.5}></l-spacer>
          <e-input type="email" name="email" placeholder="Email"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-input type="password" name="password" placeholder="Password"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-button action="submit_LoginInputs">Login</e-button>
          <l-spacer value={1}></l-spacer>
          <e-text variant="footnote">
            {' '}
            <e-link href="/forgot-password">Forgot Password</e-link>
          </e-text>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <e-text variant="footnote">
            By logging in, you accept our <br />
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
