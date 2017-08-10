export class Home {

  constructor() {    
  }

  init(){
    let div = document.createElement('header');
    div.innerHTML = `     
            <h1>Welcom to My PodJs!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe expedita doloribus, praesentium laboriosam. Vero non eius enim, vel sunt, facere voluptates hic omnis iure consequuntur itaque impedit ipsa. Esse, exercitationem!</p>

        
    `

    return div;
  }
}