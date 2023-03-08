import { Component, h } from '@stencil/core';
import { state } from '../../global/script';
import { helper_AppRoot_Api_GetUserData, helper_AppRoot_Session_IsUserLogged } from './helpers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  componentWillLoad() {
    this.verify_IsUserLogged();
  }

  verify_IsUserLogged() {
    state.is_Logged = helper_AppRoot_Session_IsUserLogged();
    if (state.is_Logged) {
      helper_AppRoot_Api_GetUserData();
    }
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component={state.is_Logged ? 'v-my-library' : 'v-login'} />
          <stencil-route url="/checkout" component="v-checkout" />
          <stencil-route url="/forgot-password" component="v-forgot-password" />
          <stencil-route url="/login" component="v-login" exact={true} />
          <stencil-route url="/my-library" component="v-my-library" exact={true} />
          <stencil-route url="/payment-failed" component="v-payment-failed" exact={true} />
          <stencil-route url="/payment-success" component="v-payment-success" exact={true} />
          <stencil-route url="/reader" component="v-reader" />
          <stencil-route url="/signup" component="v-signup" />
          <stencil-route url="/store" component="v-store" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
