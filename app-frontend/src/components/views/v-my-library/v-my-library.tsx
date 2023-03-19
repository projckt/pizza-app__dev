import { Component, Event, EventEmitter, FunctionalComponent, Listen, Prop, Host, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { interface_ReSend_EmailVerificationCode_Inputs, interface_Submit_EmailVerificationCode_Inputs } from './interfaces';
import { generate_ReSend_EmailVerificationCode_Payload, generate_Submit_EmailVerificationCode_Payload } from './helpers';
import { state } from '../../../global/script';
import {
  helper_Validate_ReSend_EmailVerificationCode_Inputs,
  helper_ApiCall_ReSend_EmailVerificationCode,
  helper_Validate_Submit_EmailVerificationCode_Inputs,
  helper_ApiCall_Submit_EmailVerificationCode,
} from './helpers';

@Component({
  tag: 'v-my-library',
  styleUrl: 'v-my-library.css',
  shadow: true,
})
export class VMyLibrary {
  @Prop() history: RouterHistory;

  private code_EmailVerification: number = 0;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'openReader') {
      this.open_Reader();
    } else if (e.detail.action === 'action_ReSend_EmailVerificationCode') {
      this.handle_Submit_ReSend_EmailVerificationCode();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'store') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/store',
        data: {},
      });
    }
  }

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'code_EmailVerification') {
      this.code_EmailVerification = e.detail.value;
      this.handle_Input_EmailVerification_Code();
    }
  }

  open_Reader() {
    this.history.push(`/reader`, {});
  }

  async handle_Submit_ReSend_EmailVerificationCode() {
    let payload_ReSend_EmailVerificationCode_Inputs: interface_ReSend_EmailVerificationCode_Inputs = generate_ReSend_EmailVerificationCode_Payload(state.account_Email);

    let { isValid_ReSend_EmailVerificationCode_Inputs, message_Validate_ReSend_EmailVerificationCode_Inputs } =
      helper_Validate_ReSend_EmailVerificationCode_Inputs(payload_ReSend_EmailVerificationCode_Inputs);
    if (!isValid_ReSend_EmailVerificationCode_Inputs) {
      return alert(`❌ ${message_Validate_ReSend_EmailVerificationCode_Inputs}`);
    }

    let { success, message } = await helper_ApiCall_ReSend_EmailVerificationCode(payload_ReSend_EmailVerificationCode_Inputs);
    if (!success) {
      return alert(`❌ ${message}`);
    }

    alert(`✅ ${message}`);
  }

  handle_Input_EmailVerification_Code() {
    let length_Code_EmailVerification: number = this.code_EmailVerification.toString().length;
    if (length_Code_EmailVerification === 4) {
      this.handle_Submit_EmailVerification_Code();
    }
  }

  async handle_Submit_EmailVerification_Code() {
    let payload_Submit_EmailVerificationCode_Inputs: interface_Submit_EmailVerificationCode_Inputs = generate_Submit_EmailVerificationCode_Payload(
      state.account_Email,
      this.code_EmailVerification,
    );

    let { isValid_Submit_EmailVerificationCode_Inputs, message_Validate_Submit_EmailVerificationCode_Inputs } =
      helper_Validate_Submit_EmailVerificationCode_Inputs(payload_Submit_EmailVerificationCode_Inputs);
    if (!isValid_Submit_EmailVerificationCode_Inputs) {
      return alert(`❌ ${message_Validate_Submit_EmailVerificationCode_Inputs}`);
    }

    let { success, message } = await helper_ApiCall_Submit_EmailVerificationCode(payload_Submit_EmailVerificationCode_Inputs);
    if (!success) {
      return alert(`❌ ${message}`);
    }

    state.isVerified_AccountEmail = true;
    alert(`✅ ${message}`);
  }

  Banner_EmailVerification: FunctionalComponent = () => (
    <c-banner theme="danger">
      <l-row justifyContent="space-between">
        <l-row>
          <e-text>Enter your email verification code</e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-input type="number" name="code_EmailVerification" placeholder="4-digit code"></e-input>
        </l-row>
        <e-button action="action_ReSend_EmailVerificationCode">Re-send code</e-button>
      </l-row>
    </c-banner>
  );

  LeftPanel: FunctionalComponent = () => (
    <div class="left-panel">
      <header>
        <e-text variant="heading">Aitihya</e-text>
        <e-text>Digital Library</e-text>
        <l-spacer value={4}></l-spacer>
        <e-link variant="navLink_Active" action="myLibrary" event={true}>
          <l-row>
            <ion-icon name="book-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.5}></l-spacer>
            <e-text>My Library</e-text>
          </l-row>
        </e-link>
        <l-spacer value={0.5}></l-spacer>
        <e-link variant="navLink" action="store" event={true}>
          <l-row>
            <ion-icon name="cart-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.5}></l-spacer>
            <e-text>Store</e-text>
          </l-row>
        </e-link>
        <l-spacer value={1}></l-spacer>
      </header>
      <footer>
        <p-user-control></p-user-control>
      </footer>
    </div>
  );

  RightPanel: FunctionalComponent = () => (
    <div class="right-panel">
      {!state.isVerified_AccountEmail && <this.Banner_EmailVerification></this.Banner_EmailVerification>}
      <l-spacer value={2}></l-spacer>
      {/* <e-text>My library</e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={2}></l-spacer>
      <p-gallery>
        <p-item-doc purpose="read" cover="" title="kjebrkvejbrkvbalejbrlvajblrvalwjrblvjbrv"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="kvjrnkvjkaejbr"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="kjebrkvejbrkvbalejbrlvajblrvalwjrblvjbrv 3"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="kvjrnkvjkaejbr"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="Vol 1, Issue V33"></p-item-doc>
      </p-gallery> */}
      <e-text>
        Your library is empty. Please visit <e-link href="/store">our store</e-link> to buy journals
      </e-text>
    </div>
  );

  render() {
    return (
      <Host>
        <this.LeftPanel></this.LeftPanel>
        <this.RightPanel></this.RightPanel>
      </Host>
    );
  }
}
