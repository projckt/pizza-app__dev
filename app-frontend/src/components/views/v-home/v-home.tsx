import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  render() {
    return (
      <Host>
        <h1></h1>
        <p>
          <strong>PIZZA ONTOLOGY TEST</strong>
          <br /> Ontology: <a href="http://www.co-ode.org/ontologies/pizza/pizza.owl">http://www.co-ode.org/ontologies/pizza/pizza.owl</a>
        </p>
        <hr />
      </Host>
    );
  }
}
