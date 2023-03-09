import { Component, Event, EventEmitter, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

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
    if (state.isUser_Logged) {
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
