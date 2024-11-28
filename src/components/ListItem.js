import { Component } from '../core/Component';
import { format } from 'date-fns';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    const formattedDate = format(this.state.date, 'dd/MM/yyyy, HH:mm:ss');
    this.$rootElement.innerHTML = `${formattedDate} -&nbsp;<b>$${this.state.amount}</b>`;
  }
}
