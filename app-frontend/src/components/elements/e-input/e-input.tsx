import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-input',
  styleUrl: 'e-input.css',
  shadow: true,
})
export class EInput {
  @Event({
    eventName: 'textInput',
    bubbles: true,
  })
  event_TextInput: EventEmitter;

  @Prop()
  type: string;
  @Prop() name: string;
  @Prop() placeholder: string = 'Your text';

  handle_AlphanumericInput(e) {
    this.event_TextInput.emit({
      name: name,
      value: e.target.value,
    });
  }

  componentWillLoad() {
    console.log('Component is about to be rendered');
  }

  render() {
    if (this.type === 'email' || 'number' || 'password' || 'text') {
      return <input type={this.type} placeholder={this.placeholder} onChange={e => this.handle_AlphanumericInput(e)} />;
    }
  }
}
