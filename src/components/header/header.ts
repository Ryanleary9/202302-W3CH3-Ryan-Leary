import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(
    public selector: string,
    public title: string = 'Cabezalis refuge'
  ) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <header class="header">
    <h1>${this.title}</h1>
    <p role="note" aria-label="info">Adopta un perro</p>
    </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
