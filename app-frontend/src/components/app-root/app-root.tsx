import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state } from '../../global/script';
import { helper_AppRoot_Api_GetUserData, helper_AppRoot_Session_IsUserLogged } from './helpers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @Listen('event_RouteTo') handle_RouteTo(e) {
    console.log(`routeTo: ${e.detail.route}`);
    this.history.push(e.detail.route, e.detail.data);
  }

  componentWillLoad() {
    this.verify_IsUserLogged();
  }

  verify_IsUserLogged() {
    state.isUser_Logged = helper_AppRoot_Session_IsUserLogged();
    if (helper_AppRoot_Session_IsUserLogged()) {
      helper_AppRoot_Api_GetUserData();
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
          <this.Route_LoggedIn url="/" component="v-my-library"></this.Route_LoggedIn>
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
          if (state.isUser_Logged) {
            return <Component {...props} {...props.componentProps} {...routeRenderProps}></Component>;
          }
          return <stencil-router-redirect url="/login"></stencil-router-redirect>;
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
          if (!state.isUser_Logged) {
            return <Component {...props} {...props.componentProps} {...routeRenderProps}></Component>;
          }
          return <stencil-router-redirect url="/my-library"></stencil-router-redirect>;
        }}
      />
    );
  };
}

injectHistory(AppRoot);
