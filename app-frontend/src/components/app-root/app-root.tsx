import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state, IO } from '../../global/script';
import { helper_Set_State, helper_Set_Session_In_LocalStorage, helper_Check_Session_In_LocalStorage } from './helpers';
import { Helper_ApiCall_GetAccountDetails_BySession } from '../../global/script/helpers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @Listen('event_RouteTo') handle_RouteTo(e) {
    if (e.detail.type === 'push') {
      this.history.push(e.detail.route, e.detail.data);
    } else if (e.detail.type === 'goBack') {
      this.history.goBack();
    }
  }

  @Listen('success_Auth') handle_success_Auth(e) {
    helper_Set_State(e.detail.payload);
    helper_Set_Session_In_LocalStorage();
  }

  componentWillLoad() {
    let { payload } = helper_Check_Session_In_LocalStorage();
    if (payload.isLogged) {
      state.isActive_Session = payload.isLogged;
    }
  }

  componentDidLoad() {
    // init_Socket();
    if (state.isActive_Session) {
      this.fetch_AccountData();
    }
  }

  disconnectedCallback() {
    IO.disconnect();
  }

  async fetch_AccountData() {
    let { success, message, payload } = await Helper_ApiCall_GetAccountDetails_BySession();
    if (!success) {
      this.history.push('/login', {});
      return console.log(message);
    }
    helper_Set_State(payload);
    helper_Set_Session_In_LocalStorage();
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="v-home" />
          <stencil-route component="v-catch-all" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

injectHistory(AppRoot);
