import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state } from '../../global/script';
import { helper_Set_AccountDetails } from './helpers';
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

  @Listen('success_Auth') handle_success_Auth() {
    this.init_GetAccountData();
  }

  componentWillLoad() {
    this.init_GetAccountData();
  }

  async init_GetAccountData() {
    let { success, message, payload } = await Helper_ApiCall_GetAccountDetails_BySession();
    if (!success) {
      this.history.push('/login', {});
      return console.log(message);
    }

    helper_Set_AccountDetails(payload);

    if (state.isActive_Session) {
      this.history.push('/login', {});
    } else {
      this.history.push('/my-library', {});
    }
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          {/* LoggedOut Routes */}
          <this.Route_LoggedOut url="/login" component="v-login"></this.Route_LoggedOut>
          <this.Route_LoggedOut url="/signup" component="v-signup"></this.Route_LoggedOut>
          <this.Route_LoggedOut url="/forgot-password" component="v-forgot-password"></this.Route_LoggedOut>

          {/* LoggedIn Routes */}
          <this.Route_LoggedIn url="/my-library" component="v-my-library"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/store" component="v-store"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/checkout" component="v-checkout"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/reader" component="v-reader"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/payment-success" component="v-payment-success"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/payment-failed" component="v-payment-failed"></this.Route_LoggedIn>
        </stencil-route-switch>
      </stencil-router>
    );
  }

  Route_LoggedIn = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={routeRenderProps => {
          if (state.isActive_Session) {
            return <Component {...props} {...props.componentProps} {...routeRenderProps}></Component>;
          } else {
            return <stencil-router-redirect url="/login"></stencil-router-redirect>;
          }
        }}
      />
    );
  };

  Route_LoggedOut = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={routeRenderProps => {
          if (!state.isActive_Session) {
            return <Component {...props} {...props.componentProps} {...routeRenderProps}></Component>;
          } else {
            return <stencil-router-redirect url="/my-library"></stencil-router-redirect>;
          }
        }}
      />
    );
  };
}

injectHistory(AppRoot);
