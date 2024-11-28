import { Component } from '../core/Component';
//import { App } from ///

export class Form extends Component {


  setup(props) {
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.$label = document.createElement('label');
    this.$label.textContent = 'Введите сумму в $'
    this.$label.className = 'donate-form__input-label';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';

    this.$button = document.createElement('button');
    this.$button.textContent = 'Задонатить';
    this.$button.className = 'donate-form__submit-button';

    this.$rootElement.appendChild(this.$label);
    this.$label.appendChild(this.$input);
    this.$rootElement.appendChild(this.$button);

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    get isValid() {
      const amount = parseFloat(this.state.amount);
      return !isNaN(amount) && amount >= 1 && amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    console.log('bool', this.isValid)
    console.log('Input value:', this.state.amount);

    if(this.isValid) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    this.props.onSubmit(this.state.amount);
   
    //console.log('Form submitted with amount:', this.state.amount);
  }
}
