import { Component, Event, EventEmitter, Listen, State, Host, h } from '@stencil/core';
import { helper_Validate_SendResetCode_Inputs, generate_SendResetCode_Payload } from './helpers';
import { interface_SendResetCode_Inputs } from './interfaces';

@Component({
  tag: 'v-forgot-password',
  styleUrl: 'v-forgot-password.css',
  shadow: true,
})
export class VForgotPassword {
  @State() compState: string = 'init';

  private email: string = '';

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'send_ResetCode') {
      this.handle_Submit_SendResetCode_Inputs();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'goBack') {
      this.event_RouteTo.emit({
        type: 'goBack',
      });
    }
  }

  async handle_Submit_SendResetCode_Inputs() {
    let payload_SendResetCode_Inputs: interface_SendResetCode_Inputs = generate_SendResetCode_Payload(this.email);

    let { isValid_SendResetCode_Inputs, message_Validate_SendResetCode_Inputs } = helper_Validate_SendResetCode_Inputs(payload_SendResetCode_Inputs);
    if (!isValid_SendResetCode_Inputs) {
      return alert(message_Validate_SendResetCode_Inputs);
    }

    alert('valid inputs');
  }

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
              <e-link action="goBack" event={true}>
                &lt; Back
              </e-link>
            </e-text>
            <e-button action="send_ResetCode">Send reset code</e-button>
          </l-row>
        </c-card>
      </Host>
    );
  }
}
