

export class Home{
    

    constructor(){
        this.name ='home';
        this.model =  {
            home : []
        }
    }    

    view(){       
        return `
            <div>
            <section class="home">
                <div>                    
                    <article>
                        <header>
                            <h1>Welcome to My PodJs!</h1>
                        </header>
                        <footer>
                            <p>Integer adipiscin sem. Nullam quis massa sit amet</p>
                        </footer>
                        <content>
                            <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. 
                            Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, 
                            faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida 
                            tristique. Nunc iaculis mi in ante.
                            </p> 
                        </content>
                    </article> 
                    <article>
                        <header>
                            <h1>Welcom to My PodJs!</h1>
                        </header>
                        <footer>
                            <p>Integer adipiscin sem. Nullam quis massa sit amet</p>
                        </footer>
                        <content>
                            <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. 
                            Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, 
                            faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida 
                            tristique. Nunc iaculis mi in ante.
                            </p> 
                        </content>
                    </article> 
                                     
                </div>
                <aside class="home-sidebar">
                        <header>
                            <h1>News in My PodJs!</h1>
                        </header>
                        <footer>
                            <p>Integer adipiscin sem. Nullam quis massa sit amet</p>
                        </footer>
                        <content>
                            <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. 
                            Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, 
                            faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida 
                            tristique. Nunc iaculis mi in ante.
                            </p> 
                        </content>
                    </aside>
                
            </section>
            
            </div>
        `
    };

    controller(){
    }


   


}