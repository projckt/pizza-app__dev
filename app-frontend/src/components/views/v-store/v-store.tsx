import { Component, Event, EventEmitter, FunctionalComponent, Listen, Prop, State, Host, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { interface_ReSend_EmailVerificationCode_Inputs, interface_Submit_EmailVerificationCode_Inputs } from './interfaces';
import { generate_ReSend_EmailVerificationCode_Payload, generate_Submit_EmailVerificationCode_Payload } from './helpers';
import { state } from '../../../global/script';
import {
  helper_Validate_ReSend_EmailVerificationCode_Inputs,
  helper_ApiCall_ReSend_EmailVerificationCode,
  helper_Validate_Submit_EmailVerificationCode_Inputs,
  helper_ApiCall_Submit_EmailVerificationCode,
  helper_ApiCall_GetAll_Documents,
} from './helpers';

@Component({
  tag: 'v-store',
  styleUrl: 'v-store.css',
  shadow: true,
})
export class VStore {
  @Prop() history: RouterHistory;

  @State() isFetched_ViewData: boolean = false;

  private code_EmailVerification: number = 0;
  private data_Documents: any = [];

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'goToCheckout') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/checkout',
        data: e.detail.value,
      });
    } else if (e.detail.action === 'action_ReSend_EmailVerificationCode') {
      this.handle_Submit_ReSend_EmailVerificationCode();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'myLibrary') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
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

  componentDidLoad() {
    this.fetch_ViewData();
  }

  handle_Input_EmailVerification_Code() {
    let length_Code_EmailVerification: number = this.code_EmailVerification.toString().length;
    if (length_Code_EmailVerification === 4) {
      this.handle_Submit_EmailVerification_Code();
    }
  }

  async fetch_ViewData() {
    let { success, message, payload } = await helper_ApiCall_GetAll_Documents();

    if (!success) {
      return alert(`❌ ${message}`);
    }

    this.data_Documents = payload;
    this.isFetched_ViewData = true;
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

    alert(`✅ ${message}`);
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
        <e-link variant="navLink" action="myLibrary" event={true}>
          <l-row>
            <ion-icon name="book-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.25}></l-spacer>
            <e-text>My Library</e-text>
          </l-row>
        </e-link>
        <l-spacer value={0.5}></l-spacer>
        <e-link variant="navLink_Active" action="store" event={true}>
          <l-row>
            <ion-icon name="cart-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.25}></l-spacer>
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
      <e-text variant="subHeading">Store - Buy journals</e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={2}></l-spacer>
      {this.isFetched_ViewData ? <this.ui_Gallery></this.ui_Gallery> : <this.ui_Skel></this.ui_Skel>}
    </div>
  );

  ui_Skel: FunctionalComponent = () => (
    <p-gallery>
      <p-item-doc isSkel={true}></p-item-doc>
      <p-item-doc isSkel={true}></p-item-doc>
      <p-item-doc isSkel={true}></p-item-doc>
      <p-item-doc isSkel={true}></p-item-doc>
    </p-gallery>
  );

  ui_Gallery: FunctionalComponent = () => (
    <div>
      {this.data_Documents.length > 0 ? (
        <p-gallery>
          {this.data_Documents.map(document => (
            <p-item-doc
              action="buy"
              id={document.id}
              title={document.title}
              sub_Title={document.sub_Title}
              description={document.description}
              currency={document.currency}
              price={document.price}
            ></p-item-doc>
          ))}
        </p-gallery>
      ) : (
        <e-text>The publisher has not put up any journals for sale</e-text>
      )}
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
