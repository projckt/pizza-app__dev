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
  @Prop() size: string = 'default';
  @Prop() disabled: boolean = false;

  @Event({
    eventName: 'buttonClick',
    bubbles: true,
  })
  event_ButtonClick: EventEmitter;

  private handle_ButtonClick(e) {
    e.preventDefault();
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
    } else if (this.variant === 'reader') {
      this.styleClasses = `${this.styleClasses} reader`;
    }

    if (this.size === 'wide') {
      this.styleClasses = `${this.styleClasses} wide`;
    }
  }

  render() {
    return (
      <button class={this.styleClasses} onClick={e => this.handle_ButtonClick(e)} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
