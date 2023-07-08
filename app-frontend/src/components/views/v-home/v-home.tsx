import { Component, Host, FunctionalComponent, State, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  @State() isFetched_Toppings: boolean = false;
  @State() isFetched_Pizza: boolean = false;
  @State() isFetched_Countries: boolean = false;
  @State() isFetched_PizzaOptions: boolean = false;
  @State() view_Sidebar: string = 'toppings';
  @State() isFetched_PizzaDetails: boolean = false;
  @State() activePizza: string = 'American';

  private toppings: any = [];
  private countries: any = [];
  private pizzas: any = [];
  private pizzaOptions: any = [];
  private pizzaToppings: any = [];
  private url = document.domain === 'localhost' ? 'http://localhost:2554' : 'https://pizza-api.audit4sg.org';
  private isFirstLoad: boolean = true;

  componentDidLoad() {
    this.getToppings();
  }

  async getToppings() {
    this.isFetched_Toppings = false;
    let url: string = `${this.url}/toppings`;
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

  async getCountries() {
    this.isFetched_Countries = false;
    let url: string = `${this.url}/countries`;
    let options: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.countries = data.payload;
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_Countries = true;
  }

  async getPizzaOptions() {
    this.isFetched_PizzaOptions = false;
    let url: string = `${this.url}/pizzas`;
    let options: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.pizzaOptions = data.payload;
        this.initPizzaToppings();
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_PizzaOptions = true;
  }

  async handleSpicinesChange(e) {
    this.isFirstLoad = true;
    this.isFetched_Toppings = false;
    this.isFetched_Pizza = false;
    let url: string = `${this.url}/toppings-by-spiciness`;
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
    this.isFirstLoad = false;
    this.isFetched_Pizza = false;
    let url: string = `${this.url}/pizzas-by-topping`;
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

  async handleCountryChange(e) {
    this.isFirstLoad = false;
    this.isFetched_Pizza = false;
    let url: string = `${this.url}/pizzas-by-country`;
    let options: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: e.target.value,
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

  async handlePizzaChange(e) {
    this.activePizza = e.target.value;
    this.isFetched_PizzaDetails = false;
    let url: string = `${this.url}/pizza-toppings`;
    let options: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pizza: this.activePizza,
      }),
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.pizzaToppings = data.payload;
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_PizzaDetails = true;
  }

  async initPizzaToppings() {
    this.isFetched_PizzaDetails = false;
    let url: string = `${this.url}/pizza-toppings`;
    let options: any = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pizza: this.activePizza,
      }),
    };
    await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.pizzaToppings = data.payload;
      })
      .catch(error => {
        console.log(error);
      });
    this.isFetched_PizzaDetails = true;
  }

  handleExplorationChange(e) {
    this.view_Sidebar = e.target.value;

    if (this.view_Sidebar === 'toppings') {
      this.getToppings();
    } else if (this.view_Sidebar === 'pizzas') {
      this.getPizzaOptions();
    } else if (this.view_Sidebar === 'countries') {
      this.getCountries();
    }
  }

  View_Topping_Sidebar: FunctionalComponent = () => (
    <div>
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
        <div class="pizza-toppings-container">
          {this.toppings.map(item => (
            <div class="radio-container">
              <input id={item} name="toppings" type="radio" value={item} onChange={e => this.handleToppingsChange(e)}></input>
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
        </div>
      )}
    </div>
  );

  View_Pizza_Sidebar: FunctionalComponent = () => (
    <div>
      <p class="label">PIZZAS</p>
      {this.isFetched_PizzaOptions ? (
        <div class="pizza-toppings-container">
          {this.pizzaOptions.map((item, index) => (
            <div class="radio-container">
              <input id={item} name="pizzaOptions" type="radio" value={item} onChange={e => this.handlePizzaChange(e)} checked={index === 0 && true}></input>
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
        </div>
      )}
    </div>
  );

  View_Country_Sidebar: FunctionalComponent = () => (
    <div>
      <p class="label">COUNTRIES</p>
      {this.isFetched_Countries ? (
        <div class="pizza-toppings-container">
          {this.countries.map(item => (
            <div class="radio-container">
              <input id={item.name} name="countries" type="radio" value={item.name} onChange={e => this.handleCountryChange(e)}></input>
              <label htmlFor={item.name}>
                {item.flag} {item.name}
              </label>
            </div>
          ))}
          <br />
          <div class="warning-container">
            <p>
              <strong>⚠️ Warning</strong>
              <br />
              <br />
              <span>
                1) Not all pizzas/toppings have their <u>countryOfOrigin</u> defined in this ontology
              </span>
              <br />
              <br />
              <span> 2) Not all countries are assigned to pizzas</span>
              <br />
              <br />
              <span>
                {' '}
                3) This filter will yield results only for <u>America</u> and <u>Italy</u>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
          <br />
          <p-loader></p-loader>
        </div>
      )}
    </div>
  );

  View_Pizza_Details: FunctionalComponent = () => (
    <div>
      <p>
        <strong>{this.activePizza}</strong>
      </p>
      <p>Toppings:</p>
      <ul>
        {this.isFetched_PizzaDetails ? (
          this.pizzaToppings.map(item => (
            <li>
              {item.topping} {item.spice === 'Mild' && '🌿'}
              {item.spice === 'Medium' && '🌶️'}
              {item.spice === 'Hot' && '🔥'}
            </li>
          ))
        ) : (
          <div class="pizza-details-loader">
            <p-loader></p-loader>
            <br />
            <p-loader></p-loader>
            <br />
            <p-loader></p-loader>
          </div>
        )}
      </ul>
    </div>
  );

  render() {
    return (
      <Host>
        <h1></h1>
        <p>
          <strong>EXPLORE THE PIZZA ONTOLOGY</strong>
          <br /> Ontology: <a href="https://protege.stanford.edu/ontologies/pizza/pizza.owl">https://protege.stanford.edu/ontologies/pizza/pizza.owl</a>
        </p>
        <hr />
        <main>
          <div class="sidebar">
            <p class="label">EXPLORE BY</p>
            <div class="radio-container">
              <input id="toppings" name="exploration" type="radio" value="toppings" onChange={e => this.handleExplorationChange(e)} checked={true}></input>
              <label htmlFor="toppings">🥗&nbsp;&nbsp;Topping</label>
            </div>
            <div class="radio-container">
              <input id="pizzas" name="exploration" type="radio" value="pizzas" onChange={e => this.handleExplorationChange(e)}></input>
              <label htmlFor="pizzas">🍕&nbsp;&nbsp;Pizza</label>
            </div>
            <div class="radio-container">
              <input id="countries" name="exploration" type="radio" value="countries" onChange={e => this.handleExplorationChange(e)}></input>
              <label htmlFor="countries">🌎&nbsp;&nbsp;Country</label>
            </div>
            <br />
            <div class="seperator"></div>
            <br />

            {this.view_Sidebar === 'toppings' && <this.View_Topping_Sidebar></this.View_Topping_Sidebar>}
            {this.view_Sidebar === 'pizzas' && <this.View_Pizza_Sidebar></this.View_Pizza_Sidebar>}
            {this.view_Sidebar === 'countries' && <this.View_Country_Sidebar></this.View_Country_Sidebar>}
          </div>
          <div class="content">
            {this.view_Sidebar === 'toppings' || this.view_Sidebar === 'countries' ? (
              this.isFetched_Pizza ? (
                this.pizzas.length > 0 ? (
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
                  <p>There are no pizzas</p>
                )
              ) : this.isFirstLoad ? (
                <p>
                  {this.view_Sidebar === 'toppings' || this.view_Sidebar === 'countries' ? (
                    <span>
                      {' '}
                      Kindly choose a {this.view_Sidebar === 'toppings' && 'topping'} {this.view_Sidebar === 'countries' && 'country'} to show pizzas
                    </span>
                  ) : (
                    <this.View_Pizza_Details></this.View_Pizza_Details>
                  )}
                </p>
              ) : (
                <div class="pizza-skel-container">
                  <p-loader variant="card"></p-loader>
                  <p-loader variant="card"></p-loader>
                  <p-loader variant="card"></p-loader>
                  <p-loader variant="card"></p-loader>
                </div>
              )
            ) : (
              <this.View_Pizza_Details></this.View_Pizza_Details>
            )}
          </div>
        </main>
      </Host>
    );
  }
}
