import { Component, Event, EventEmitter, State, Host, Listen, Prop, h, FunctionalComponent } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'v-payment-handle',
  styleUrl: 'v-payment-handle.css',
  shadow: true,
})
export class VPaymentHandle {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'myLibrary') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }
  }

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isFetched_ViewData: boolean = false;

  private id_Session: string;

  componentWillLoad() {
    if (this.match.params.id_Session) {
      this.id_Session = this.match.params.id_Session.trim();
    }

    console.log(this.id_Session);
  }

  componentDidLoad() {
    setTimeout(() => {
      this.fetch_Session_Details();
    }, 5000);
  }

  async fetch_Session_Details() {
    console.log(`fetching session details: ${this.id_Session}`);
  }

  UI_Skel: FunctionalComponent = () => (
    <c-card>
      <div class="skel__line"></div>
      <div class="skel__line"></div>
      <div class="skel__line"></div>
    </c-card>
  );

  UI_Default: FunctionalComponent = () => (
    <c-card>
      <e-text variant="display" theme="success">
        Payment Successful
      </e-text>
      <l-spacer value={1}></l-spacer>
      <e-text>
        Thank you for purchasing <strong>Aitihya, the Heritage - Vol XVIII, Issue 2</strong>
      </e-text>
      <e-text>It has been added to your library.</e-text>
      <l-spacer value={1}></l-spacer>
      <e-link action="myLibrary" event={true}>
        <strong>Go to library</strong>
      </e-link>
    </c-card>
  );

  render() {
    return <Host>{this.isFetched_ViewData ? <this.UI_Default></this.UI_Default> : <this.UI_Skel></this.UI_Skel>}</Host>;
  }
}

injectHistory(VPaymentHandle);
