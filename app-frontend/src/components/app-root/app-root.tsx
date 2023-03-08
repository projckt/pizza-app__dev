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
    state.isUser_Logged = helper_AppRoot_Session_IsUserLogged();
    if (state.isUser_Logged) {
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

          {/* Discarded Routes */}
          {/* <stencil-route url="/" component={state.isUser_Logged ? 'v-my-library' : 'v-login'} /> */}
          {/* <stencil-route url="/checkout" component="v-checkout" /> */}
          {/* <stencil-route url="/forgot-password" component="v-forgot-password" /> */}
          {/* <stencil-route url="/login" component="v-login" exact={true} /> */}
          {/* <stencil-route url="/my-library" component="v-my-library" exact={true} /> */}
          {/* <stencil-route url="/payment-failed" component="v-payment-failed" exact={true} /> */}
          {/* <stencil-route url="/payment-success" component="v-payment-success" exact={true} /> */}
          {/* <stencil-route url="/reader" component="v-reader" /> */}
          {/* <stencil-route url="/signup" component="v-signup" /> */}
          {/* <stencil-route url="/store" component="v-store" /> */}
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
