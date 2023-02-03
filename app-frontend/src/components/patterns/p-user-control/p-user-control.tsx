import { Component, h } from '@stencil/core';

@Component({
  tag: 'p-user-control',
  styleUrl: 'p-user-control.css',
  shadow: true,
})
export class PUserControl {
  render() {
    return (
      <c-card>
        <l-row>
          <ion-icon name="person-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.25}></l-spacer>
          <e-text>Tuhin</e-text>
        </l-row>
        <l-spacer value={1}></l-spacer>
        <l-seperator></l-seperator>
        <l-spacer value={1}></l-spacer>
        <e-link>
          <ion-icon name="settings-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.25}></l-spacer>
          <e-text>Settings</e-text>
        </e-link>
        <l-spacer value={0.5}></l-spacer>
        <e-link theme="danger">
          <ion-icon name="log-out-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.25}></l-spacer>
          <e-text>Logout</e-text>
        </e-link>
      </c-card>
    );
  }
}
