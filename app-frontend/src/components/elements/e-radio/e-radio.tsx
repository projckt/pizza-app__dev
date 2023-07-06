import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'e-radio',
  styleUrl: 'e-radio.css',
  shadow: true,
})
export class ERadio {
  @Event({
    eventName: 'radioClick',
    bubbles: true,
  })
  event_RadioClick: EventEmitter;

  @Prop() label: string;
  @Prop() name: string;
  @Prop() value: string;
  @Prop() isChecked: boolean = false;

  handleRadioButtonClick() {
    this.event_RadioClick.emit({
      name: this.name,
      value: this.value,
    });
  }

  render() {
    return (
      <Host>
        <input id={`${this.name}-${this.value}`} type="radio" name={this.name} value={this.value} onChange={() => this.handleRadioButtonClick()} checked={this.isChecked}></input>
        <label htmlFor={`${this.name}-${this.value}`}>{this.label}</label>
      </Host>
    );
  }
}
