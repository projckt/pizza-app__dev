import { Component, Event, EventEmitter, FunctionalComponent, Listen, Prop, Host, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'v-store',
  styleUrl: 'v-store.css',
  shadow: true,
})
export class VStore {
  @Prop() history: RouterHistory;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'goToCheckout') {
      this.route_ToCheckout();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'myLibrary') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }
  }

  route_ToCheckout() {
    this.history.push(`/checkout`, {});
  }

  LeftPanel: FunctionalComponent = () => (
    <div class="left-panel">
      <header>
        <e-text variant="heading">Aitihya</e-text>
        <e-text>Digital Library</e-text>
        <l-spacer value={4}></l-spacer>
        <e-link variant="navLink" action="myLibrary" event={true}>
          <l-row>
            <ion-icon name="book-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.5}></l-spacer>
            <e-text>My Library</e-text>
          </l-row>
        </e-link>
        <l-spacer value={0.5}></l-spacer>
        <e-link variant="navLink_Active" action="store" event={true}>
          <l-row>
            <ion-icon name="cart-outline"></ion-icon>
            <l-spacer variant="horizontal" value={0.5}></l-spacer>
            <e-text>Store</e-text>
          </l-row>
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
      {/* <e-text>Store - Buy new journals</e-text>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={2}></l-spacer>
      <p-gallery>
        <p-item-doc purpose="buy" cover="" title="kjebrkvejbrkvbalejbrlvajblrvalwjrblvjbrv"></p-item-doc>
        <p-item-doc purpose="buy" cover="" title="kvjrnkvjkaejbr"></p-item-doc>
        <p-item-doc purpose="buy" cover="" title="kjebrkvejbrkvbalejbrlvajblrvalwjrblvjbrv 3"></p-item-doc>
        <p-item-doc purpose="buy" cover="" title="kvjrnkvjkaejbr"></p-item-doc>
        <p-item-doc purpose="buy" cover="" title="Vol 1, Issue V33"></p-item-doc>
      </p-gallery> */}
      <e-text>Journals will be uploaded soon</e-text>
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
