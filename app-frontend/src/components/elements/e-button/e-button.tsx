import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-button',
  styleUrl: 'e-button.css',
  shadow: true,
})
export class EButton {
  @Prop() action: string;
  @Prop() value: any;
  @Prop() variant: string = 'primary';

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

  private styleClasses: string = '';

  componentWillLoad() {
    this.generate_StyleClasses();
  }

  generate_StyleClasses() {
    if (this.variant === 'primary') {
      this.styleClasses = `${this.styleClasses} primary`;
    }
  }

  render() {
    return (
      <button class={this.styleClasses} onClick={() => this.handle_ButtonClick()}>
        <slot />
      </button>
    );
  }
}
