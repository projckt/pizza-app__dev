import { Component, FunctionalComponent, Host, h } from '@stencil/core';

@Component({
  tag: 'v-my-library',
  styleUrl: 'v-my-library.css',
  shadow: true,
})
export class VMyLibrary {
  LeftPanel: FunctionalComponent = () => (
    <div class="left-panel">
      <header>
        <e-text variant="heading">Aitihya</e-text>
        <e-text>Digital Library</e-text>
        <l-spacer value={4}></l-spacer>
        <e-link variant="navLink_Active">
          <ion-icon name="book-outline"></ion-icon>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>My Library</e-text>
        </e-link>
        <l-spacer value={1}></l-spacer>
        <e-link variant="navLink" href="/store">
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
      <e-text>My library</e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={2}></l-spacer>
      <p-gallery>
        <p-item-doc purpose="read" cover="" title="kjebrkvejbrkvbalejbrlvajblrvalwjrblvjbrv"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="kvjrnkvjkaejbr"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="kjebrkvejbrkvbalejbrlvajblrvalwjrblvjbrv 3"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="kvjrnkvjkaejbr"></p-item-doc>
        <p-item-doc purpose="read" cover="" title="Vol 1, Issue V33"></p-item-doc>
      </p-gallery>
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
