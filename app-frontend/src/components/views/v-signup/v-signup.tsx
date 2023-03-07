import { Component, Host, Listen, h } from '@stencil/core';
import { helper_Validate_SignupInputs, generate_Signup_Payload } from './helpers';

@Component({
  tag: 'v-signup',
  styleUrl: 'v-signup.css',
  shadow: true,
})
export class VSignup {
  private name_First: string = '';
  private name_Last: string = '';
  private email: string = '';
  private password: string = '';

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'name_First') {
      this.name_First = e.detail.value;
    } else if (e.detail.name === 'name_Last') {
      this.name_Last = e.detail.value;
    } else if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'password') {
      this.password = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'submit_SignupInputs') {
      this.handle_Submit_SignupInputs();
    }
  }

  handle_Submit_SignupInputs() {
    let payload_SignupInputs = generate_Signup_Payload(this.name_First, this.name_Last, this.email, this.password);
    let { isValid_SignupInputs, message } = helper_Validate_SignupInputs(payload_SignupInputs);

    if (!isValid_SignupInputs) {
      return alert(message);
    }

    // send signupinputs to server
  }

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display">Sign up</e-text>
          <e-text>
            Have an account? <e-link href="/login">Login</e-link>
          </e-text>
          <l-spacer value={1.5}></l-spacer>
          <e-input type="text" name="name_First" placeholder="First name"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-input type="text" name="name_Last" placeholder="Last name"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-input type="email" name="email" placeholder="Email"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-input type="password" name="password" placeholder="Password (Min. 8 letters)"></e-input>
          <l-spacer value={1}></l-spacer>
          <e-button action="submit_SignupInputs">Sign up</e-button>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <e-text variant="footnote">
            By signing up, you accept our
            <br />
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
