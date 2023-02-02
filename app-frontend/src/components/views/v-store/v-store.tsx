import { Component, FunctionalComponent, Host, h } from '@stencil/core';

@Component({
  tag: 'v-store',
  styleUrl: 'v-store.css',
  shadow: true,
})
export class VStore {
  LeftPanel: FunctionalComponent = () => (
    <div class="left-panel">
      <header>
        <e-text variant="heading">Aitihya</e-text>
        <e-text>Digital Library</e-text>
        <l-spacer value={4}></l-spacer>
        <e-link variant="navLink" href="/my-library">
          <ion-icon name="book-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>My Library</e-text>
        </e-link>
        <l-spacer value={1}></l-spacer>
        <e-link variant="navLink_Active">
          <ion-icon name="cart-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>Store</e-text>
        </e-link>
        <l-spacer value={1}></l-spacer>
      </header>
      <footer>
        <p-user-control></p-user-control>
      </footer>
    </div>
  );

  RightPanel: FunctionalComponent = () => (
    <div class="right-panel">
      <e-text>Store - Buy new journals</e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
    </div>
  );

  render() {
    return (
      <Host>
        <this.LeftPanel></this.LeftPanel>
        <this.RightPanel></this.RightPanel>
      </Host>
    );
  }
}
