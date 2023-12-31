import { Component, Event, EventEmitter, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import {
  helper_Validate_SendResetCode_Inputs,
  helper_Validate_ConfirmPassword_Inputs,
  generate_SendResetCode_Payload,
  generate_ConfirmPassword_Payload,
  helper_SendResetCode_Api,
  helper_ConfirmPassword_Api,
} from './helpers';
import { interface_SendResetCode_Inputs, interface_ConfirmPassword_Inputs } from './interfaces';

@Component({
  tag: 'v-forgot-password',
  styleUrl: 'v-forgot-password.css',
  shadow: true,
})
export class VForgotPassword {
  private email: string = '';
  private code_ResetPassword: number = -1;
  private password_New: string = '';
  private password_New_Repeat: string = '';
  private wizard_Steps = ['init', 'confirm'];

  @State() wizard_CurrentStep: number = 0;
  @State() state: string = this.wizard_Steps[this.wizard_CurrentStep];
  @State() isActive_SendResetCode_Button: boolean = false;
  @State() isActive_ConfirmPassword_Button: boolean = false;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'code_ResetPassword') {
      this.code_ResetPassword = e.detail.value;
    } else if (e.detail.name === 'password_New') {
      this.password_New = e.detail.value;
    } else if (e.detail.name === 'password_New_Repeat') {
      this.password_New_Repeat = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'send_ResetCode') {
      this.handle_Submit_SendResetCode();
    } else if (e.detail.action === 'confirm_Password') {
      this.handle_Confirm_Password();
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

  handle_Submit_SendResetCode = async () => {
    let payload_SendResetCode_Inputs: interface_SendResetCode_Inputs = generate_SendResetCode_Payload(this.email);

    let { isValid_SendResetCode_Inputs, message_Validate_SendResetCode_Inputs } = helper_Validate_SendResetCode_Inputs(payload_SendResetCode_Inputs);
    if (!isValid_SendResetCode_Inputs) {
      return alert(message_Validate_SendResetCode_Inputs);
    }

    this.isActive_SendResetCode_Button = true;
    let { isSuccess_SendResetCode_Inputs_Submission, message_SendResetCode_Inputs_Submission, payload_SendResetCode_Inputs_Submission } = await helper_SendResetCode_Api(
      payload_SendResetCode_Inputs,
    );
    this.isActive_SendResetCode_Button = false;

    if (!isSuccess_SendResetCode_Inputs_Submission) {
      return alert(message_SendResetCode_Inputs_Submission);
    }
    if (!payload_SendResetCode_Inputs_Submission.success) {
      return alert(payload_SendResetCode_Inputs_Submission);
    }

    alert(payload_SendResetCode_Inputs_Submission.message);

    this.wizard_CurrentStep = this.wizard_CurrentStep + 1;
    this.state = this.wizard_Steps[this.wizard_CurrentStep];
  };

  handle_Confirm_Password = async () => {
    let payload_ConfirmPassword_Inputs: interface_ConfirmPassword_Inputs = generate_ConfirmPassword_Payload(
      this.email,
      this.password_New,
      this.password_New_Repeat,
      this.code_ResetPassword,
    );

    let { isValid_ConfirmPassword_Inputs, message_Validate_ConfirmPassword_Inputs } = helper_Validate_ConfirmPassword_Inputs(payload_ConfirmPassword_Inputs);
    if (!isValid_ConfirmPassword_Inputs) {
      return alert(message_Validate_ConfirmPassword_Inputs);
    }

    this.isActive_ConfirmPassword_Button = true;
    let { isSuccess_ConfirmPassword_Inputs_Submission, message_ConfirmPassword_Inputs_Submission, payload_ConfirmPassword_Inputs_Submission } = await helper_ConfirmPassword_Api(
      payload_ConfirmPassword_Inputs,
    );
    this.isActive_ConfirmPassword_Button = false;

    if (!isSuccess_ConfirmPassword_Inputs_Submission) {
      return alert(message_ConfirmPassword_Inputs_Submission);
    }

    alert(`${payload_ConfirmPassword_Inputs_Submission.message}. Proceed to login`);
    this.event_RouteTo.emit({
      type: 'push',
      route: '/login',
      data: {},
    });
  };

  Init: FunctionalComponent = () => (
    <div>
      <e-text variant="display">Forgot Password</e-text>
      <e-text variant="footnote">
        <strong>STEP 1 of 2 - EMAIL VERIFICATION</strong>
      </e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1}></l-spacer>
      <e-text>Enter your email. You will receive a 4-digit password reset code</e-text>
      <l-spacer value={2}></l-spacer>
      <e-input type="email" name="email" placeholder="Email"></e-input>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <e-text variant="footnote">
          <e-link action="goBack" event={true}>
            &lt; Back
          </e-link>
        </e-text>
        <e-button action="send_ResetCode" active={this.isActive_SendResetCode_Button}>
          Send reset code
        </e-button>
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
      <e-input type="password" name="password_New" placeholder="New password (min 8 chars)"></e-input>
      <l-spacer value={2}></l-spacer>
      <e-input type="password" name="password_New_Repeat" placeholder="Repeat new password"></e-input>
      <l-spacer value={2}></l-spacer>
      <l-row justifyContent="space-between">
        <e-text variant="footnote">
          <e-link action="goBack" event={true}>
            &lt; Back
          </e-link>
        </e-text>
        <e-button action="confirm_Password" active={this.isActive_ConfirmPassword_Button}>
          Confirm
        </e-button>
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
