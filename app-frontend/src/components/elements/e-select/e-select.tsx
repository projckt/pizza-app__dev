import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-select',
  styleUrl: 'e-select.css',
  shadow: true,
})
export class ESelect {
  @Prop() options: any;

  private styleClasses: string = 'default';
  private parsed_Options: any;

  componentWillLoad() {
    this.generate_StyleClasses();
    this.parse_OptionsString();
  }

  generate_StyleClasses() {}

  parse_OptionsString() {
    this.parsed_Options = JSON.parse(this.options);
  }

  render() {
    return (
      <select class={this.styleClasses}>
        {this.parsed_Options.map(option => (
          <option value={option.id}>{option.title}</option>
        ))}
      </select>
    );
  }
}
