import { Component } from '../component/component';
import { petList } from '../models/pet';
import { Header } from '../header/header';
import './task.scss';
export class Tasks extends Component {
  constructor(public selector: string, public pets: petList[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.pets
      .map(
        (item) =>
          `
    <div class="cards">
    <span>Id: ${item.id}</span>\n
    <span>Name: ${item.name}</span>\n
    <span>Raza: ${item.breed}</span>\n
    <span>Adoptado: ${item.isAdopted}</span>\n
    <span>Dueño: ${item.dueño}</span>\n
    </div>
    `
      )
      .join('\n');
    return `<section class="mid">${items}</section>`;
  }
}
