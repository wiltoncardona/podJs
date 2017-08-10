import { control } from './podmember';

export class View {
  constructor() {
    this.el = document.getElementById('target');
  }
  render() {
    this.el.innerHTML = control();
  }
}