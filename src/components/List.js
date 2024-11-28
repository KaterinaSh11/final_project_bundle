import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$headingOfList = document.createElement('h1');
    this.$headingOfList.textContent = 'Список донатов';

    this.$listContainer = document.createElement('div');


    this.$rootElement.appendChild(this.$headingOfList);
    this.$rootElement.appendChild(this.$listContainer);
  }

  addItem(item) {
    this.$rootElement.appendChild(item.$rootElement);
  }
}