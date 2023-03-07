import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

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

  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() placeholder: string = 'Your text';
  @Prop() value: string;
  @Prop() checked: boolean = false;

  private styleObject_Textbox: LooseObject = {};

  componentWillLoad() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      this.styleObject_Textbox.padding = '0.5em';
      this.styleObject_Textbox.border = '1px solid rgba(0, 0, 0, 0.3)';
      this.styleObject_Textbox.borderRadius = '0.25em';
    }
  }

  generate_StyleObject_Textbox() {}

  handle_AlphanumericInput(e) {
    this.event_TextInput.emit({
      name: name,
      value: e.target.value,
    });
  }

  render() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      return <input style={this.styleObject_Textbox} type={this.type} placeholder={this.placeholder} onChange={e => this.handle_AlphanumericInput(e)} />;
    } else if (this.type === 'radio') {
      return (
        <l-row>
          <input id={this.name} type={this.type} name={this.name} value={this.value} checked={this.checked} />
          <l-spacer variant="horizontal" value={0.15}></l-spacer>
          <label htmlFor={this.name}>{this.label}</label>
        </l-row>
      );
    }
  }
}
