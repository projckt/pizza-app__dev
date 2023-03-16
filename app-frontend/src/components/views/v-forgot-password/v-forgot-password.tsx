import { Component, Event, EventEmitter, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import { helper_Validate_SendResetCode_Inputs, generate_SendResetCode_Payload } from './helpers';
import { interface_SendResetCode_Inputs } from './interfaces';

@Component({
  tag: 'v-forgot-password',
  styleUrl: 'v-forgot-password.css',
  shadow: true,
})
export class VForgotPassword {
  private email: string = '';
  private code_ResetPassword: string = '';
  private password_New: string = '';
  private password_New_Repeat: string = '';
  private wizard_Steps = ['init', 'confirm'];

  @State() wizard_CurrentStep: number = 0;
  @State() state: string = this.wizard_Steps[this.wizard_CurrentStep];

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === '') {
    } else if (e.detail.name === '') {
    } else if (e.detail.name === '') {
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'send_ResetCode') {
      this.handle_Submit_SendResetCode_Inputs();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'goBack') {
      if (this.state === this.wizard_Steps[this.wizard_Steps.length - 1]) {
        this.wizard_CurrentStep = this.wizard_CurrentStep - 1;
        this.state = this.wizard_Steps[this.wizard_CurrentStep];
        return;
      }
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
    this.wizard_CurrentStep = this.wizard_CurrentStep + 1;
    this.state = this.wizard_Steps[this.wizard_CurrentStep];
  }

  Init: FunctionalComponent = () => (
    <div>
      <e-text variant="display">Forgot Password</e-text>
      <e-text variant="footnote">
        <strong>STEP 1 of 2 - EMAIL VERIFICATION</strong>
      </e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1}></l-spacer>
      <e-text>Enter your email. We will send you a 4-digit reset code</e-text>
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
    </div>
  );

  Confirm: FunctionalComponent = () => (
    <div>
      <e-text variant="display">Forgot Password</e-text>
      <e-text variant="footnote">
        <strong>STEP 2 of 2 - PASSWORD RESET</strong>
      </e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1}></l-spacer>
      <e-text>Enter reset code & new password</e-text>
      <l-spacer value={1}></l-spacer>
      <e-input type="number" name="code_ResetPassword" placeholder="4-digit reset code (check inbox)"></e-input>
      <l-spacer value={2}></l-spacer>
      <e-input type="text" name="password_New" placeholder="New password (min 8 chars)"></e-input>
      <l-spacer value={2}></l-spacer>
      <e-input type="text" name="password_New_Repeat" placeholder="Repeat new password"></e-input>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <e-text variant="footnote">
          <e-link action="goBack" event={true}>
            &lt; Back
          </e-link>
        </e-text>
        <e-button action="save_NewPassword">Confirm</e-button>
      </l-row>
    </div>
  );

  render() {
    return (
      <Host>
        <c-card>
          {this.state === this.wizard_Steps[0] && <this.Init></this.Init>}
          {this.state === this.wizard_Steps[1] && <this.Confirm></this.Confirm>}
        </c-card>
      </Host>
    );
  }
}
