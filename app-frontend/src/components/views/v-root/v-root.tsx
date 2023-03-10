import { Component, Event, EventEmitter, Host, h } from '@stencil/core';
import { helper_AppRoot_Session_IsUserLogged } from '../../app-root/helpers';
import {} from '../../../global/script/';

@Component({
  tag: 'v-root',
  styleUrl: 'v-root.css',
  shadow: true,
})
export class VRoot {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  componentWillLoad() {
    if (helper_AppRoot_Session_IsUserLogged()) {
      this.event_RouteTo.emit({
        route: '/my-library',
        data: {},
      });
    } else {
      this.event_RouteTo.emit({
        route: '/login',
        data: {},
      });
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
