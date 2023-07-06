import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  @State() isFetched_Toppings: boolean = false;
  @State() isFetched_Pizza: boolean = false;

  private toppings: any = [];
  private pizzas: any = [];
  private url = document.domain === 'localhost' ? 'http://localhost:2554' : 'https://pizza-api.audit4sg.org';

  componentDidLoad() {
    this.getToppings();
  }

  async getToppings() {
    this.isFetched_Toppings = false;
    let url: string = `${this.url}/toppings`;
    url = 'https://pizza-api.audit4sg.org/toppings';
    let options: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.toppings = data.payload;
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_Toppings = true;
  }

  async handleSpicinesChange(e) {
    this.isFetched_Toppings = false;
    this.isFetched_Pizza = false;
    let url: string = `${this.url}/toppings-by-spiciness`;
    url = 'https://pizza-api.audit4sg.org/toppings-by-spiciness';
    let options: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        spiciness: e.target.value,
      }),
    };

    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.toppings = data.payload;
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_Toppings = true;
  }

  async handleToppingsChange(e) {
    this.isFetched_Pizza = false;
    let url: string = `${this.url}/pizzas-by-topping`;
    url = 'https://pizza-api.audit4sg.org/pizzas-by-topping';
    let options: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topping: e.target.value,
      }),
    };

    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.pizzas = data.payload;
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_Pizza = true;
  }

  render() {
    return (
      <Host>
        <h1></h1>
        <p>
          <strong>PIZZA ONTOLOGY TEST</strong>
          <br /> Ontology: <a href="http://www.co-ode.org/ontologies/pizza/pizza.owl">http://www.co-ode.org/ontologies/pizza/pizza.owl</a>
        </p>
        <hr />
        <main>
          <div class="sidebar">
            <p class="label">TOPPINGS SPICINESS</p>
            <div class="radio-container">
              <input id="mild" name="spiciness" type="radio" value="Mild" onChange={e => this.handleSpicinesChange(e)}></input>
              <label htmlFor="mild">🌿&nbsp;&nbsp;Mild</label>
            </div>
            <div class="radio-container">
              <input id="medium" name="spiciness" type="radio" value="Medium" onChange={e => this.handleSpicinesChange(e)}></input>
              <label htmlFor="mild">🌶️&nbsp;&nbsp;Medium</label>
            </div>
            <div class="radio-container">
              <input id="hot" name="spiciness" type="radio" value="Hot" onChange={e => this.handleSpicinesChange(e)}></input>
              <label htmlFor="hot">🔥&nbsp;&nbsp;Hot</label>
            </div>
            <br />
            <div class="seperator"></div>
            <br />
            <p class="label">TOPPINGS</p>
            {this.isFetched_Toppings ? (
              <div>
                {this.toppings.map(item => (
                  <div class="radio-container">
                    <input id={item} name="toppings" type="radio" value={item} onChange={e => this.handleToppingsChange(e)}></input>
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            ) : (
              <p>Fetching..</p>
            )}
          </div>

          <div class="content">
            {this.isFetched_Pizza ? (
              this.pizzas.map(item => (
                <div class="pizza-container">
                  <div>
                    <span class="pizza-emoji">🍕</span>
                    <br />
                    <span>{item}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No pizzas here</p>
            )}
          </div>
        </main>
      </Host>
    );
  }
}
