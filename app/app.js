

export class App {
    constructor(){
        this.navElement = document.getElementById('navbar');
        this.footerElement = document.getElementById('main-footer');

        this.appElement  = document.getElementById('main');

        this.componentsByName = [];
    }


    addNavBar(navbar){        
        this.navElement.innerHTML = navbar.view();
    }

    addFooter(footer){
        this.footerElement.innerHTML = footer.view();
    }

    addComponent(component){    
        this.componentsByName[component.name] = component;
        component.model = this.proxify(component.model);        
    }

    addParams(params){
        this.params = params;
    }

    showComponent(name){
        this.currentComponent = this.componentsByName[name];
        
        if(this.currentComponent){
            this.currentComponent.controller(this.params);
        }
        this.updateView();
    }

    updateView(){
        if(this.currentComponent){
            this.appElement.innerHTML = this.currentComponent.view();
        }else {
            this.appElement.innerHTML = '<h1>Not Found</h1>';
        }
    }

    proxify(model) {
        const self = this;
        return new Proxy(model, {
        set(target, property, value) {
            console.log(`Model Changed! ${model}`);
            target[property] = value;
            self.updateView();
            return true;
        }
        });
    }

}