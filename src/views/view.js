
export class View {

  constructor(dataMember) {
    this.member = dataMember;
  }

  init(){
    let div = document.createElement('div');
    div.innerHTML = `         
          <img class="img-circle" src="${this.member.photoUrl}" alt="Generic placeholder image" width="140" height="140">
          <h2>${this.member.firstName} ${this.member.lastName} </h2>
          <p><strong>Email:</strong>  ${this.member.email}</p> 
          <h4>Role</h4>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a class="btn btn-default" href="#podteam?${this.member.id}" role="button">View details »</a></p>
        
    `

    return div;
  }

  render(element) {
    element.appendChild(this.init());
  }
}


