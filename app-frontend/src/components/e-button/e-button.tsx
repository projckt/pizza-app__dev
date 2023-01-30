import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-button',
  styleUrl: 'e-button.css',
  shadow: true,
})
export class EButton {
  @Prop() action: string;
  @Prop() value: any;

  @Event({
    eventName: 'buttonClick',
    bubbles: true,
  })
  event_ButtonClick: EventEmitter;

  private handle_ButtonClick() {
    this.event_ButtonClick.emit({
      action: this.action,
      value: this.value,
    });
  }

  render() {
    return (
      <button onClick={() => this.handle_ButtonClick()}>
        <slot />
      </button>
    );
  }
}
