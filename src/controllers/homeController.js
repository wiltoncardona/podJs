import { Home } from '../views/home';
import { render,removeChild } from '../util/utils'

export const HomeController = (data,params)=>{
    let home =  new Home();
    removeChild();
    render(home.init());
}

