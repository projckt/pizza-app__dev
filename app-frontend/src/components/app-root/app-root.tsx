import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/checkout" component="v-checkout" />
          <stencil-route url="/forgot-password" component="v-forgot-password" />
          <stencil-route url="/home" component="v-home" exact={true} />
          <stencil-route url="/login" component="v-login" exact={true} />
          <stencil-route url="/payment-failed" component="v-payment-failed" exact={true} />
          <stencil-route url="/payment-success" component="v-payment-success" exact={true} />
          <stencil-route url="/signup" component="v-signup" />
          <stencil-route url="/store" component="v-store" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
