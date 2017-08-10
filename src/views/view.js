import { control } from './podmember';

export class View {
  constructor() {    
  }
  render(element) {
    element.appendChild(control());
  }
}