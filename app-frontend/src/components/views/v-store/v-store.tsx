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
  helper_ApiCall_Get_Publications,
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
  private data_Publications: any = [];

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'goToCheckout') {
      this.event_RouteTo.emit({
        type: 'push',
        route: `/checkout/${e.detail.value}`,
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

  @State() isActive_ResendVerificationCode_Button: boolean = false;

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
    let { success, message, payload } = await helper_ApiCall_Get_Publications();

    if (!success) {
      this.isFetched_ViewData = true;
      return alert(message);
    }

    this.data_Publications = payload;
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
      return alert(message_Validate_Submit_EmailVerificationCode_Inputs);
    }

    let { success, message } = await helper_ApiCall_Submit_EmailVerificationCode(payload_Submit_EmailVerificationCode_Inputs);
    if (!success) {
      return alert(message);
    }

    state.isVerified_AccountEmail = true;
    alert(message);
  }

  async handle_Submit_ReSend_EmailVerificationCode() {
    let payload_ReSend_EmailVerificationCode_Inputs: interface_ReSend_EmailVerificationCode_Inputs = generate_ReSend_EmailVerificationCode_Payload(state.account_Email);

    let { isValid_ReSend_EmailVerificationCode_Inputs, message_Validate_ReSend_EmailVerificationCode_Inputs } =
      helper_Validate_ReSend_EmailVerificationCode_Inputs(payload_ReSend_EmailVerificationCode_Inputs);
    if (!isValid_ReSend_EmailVerificationCode_Inputs) {
      return alert(message_Validate_ReSend_EmailVerificationCode_Inputs);
    }

    this.isActive_ResendVerificationCode_Button = true;
    let { success, message } = await helper_ApiCall_ReSend_EmailVerificationCode(payload_ReSend_EmailVerificationCode_Inputs);
    this.isActive_ResendVerificationCode_Button = false;
    if (!success) {
      return alert(message);
    }

    alert(message);
  }

  Banner_EmailVerification: FunctionalComponent = () => (
    <c-banner theme="danger">
      <l-row justifyContent="space-between">
        <l-row>
          <e-text>Enter your email verification code</e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-input type="number" name="code_EmailVerification" placeholder="4-digit code"></e-input>
        </l-row>
        <e-button action="action_ReSend_EmailVerificationCode" active={this.isActive_ResendVerificationCode_Button}>
          Re-send code
        </e-button>
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
      {state.account_Email && !state.isVerified_AccountEmail && (
        <div>
          <l-spacer value={2}></l-spacer>
          <this.Banner_EmailVerification></this.Banner_EmailVerification>
        </div>
      )}
      <l-spacer value={2}></l-spacer>
      <e-text variant="subHeading" theme="light-grey">
        <l-row>
          <ion-icon name="cart"></ion-icon>
          <l-spacer variant="horizontal" value={0.25}></l-spacer>
          Store
        </l-row>
      </e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={2}></l-spacer>
      {this.isFetched_ViewData ? <this.ui_Gallery></this.ui_Gallery> : <this.ui_Skel></this.ui_Skel>}
    </div>
  );

  ui_Skel: FunctionalComponent = () => (
    <e-list>
      <e-list-item>
        <p-publication isSkel={true}></p-publication>
      </e-list-item>
      <e-list-item>
        <p-publication isSkel={true}></p-publication>
      </e-list-item>
      <e-list-item>
        <p-publication isSkel={true}></p-publication>
      </e-list-item>
    </e-list>
  );

  ui_Gallery: FunctionalComponent = () =>
    this.data_Publications.length > 0 ? (
      <e-list>
        {this.data_Publications.map(publication => (
          <e-list-item>
            <p-publication
              id_Publication={publication.id}
              heading={publication.title}
              sub_Heading={publication.edition}
              description={publication.description}
              url_Sample={publication.url_Sample}
              url_Toc={publication.url_Toc}
              url_Cover={publication.url_Cover}
              documents={JSON.stringify(publication.documents)}
            ></p-publication>
          </e-list-item>
        ))}
      </e-list>
    ) : (
      <e-text>There are no publications on sale</e-text>
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
