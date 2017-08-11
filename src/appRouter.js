import { HomeController } from './controllers/homeController';
import { PodTeamController } from './controllers/podTeamController';
import { MisionVisionController } from './controllers/misionVisionController';


export class AppRouter {

    route(event){
           let route =  location.hash.slice(1) || 'home';
            console.log(route);

            let temp = route.split('?');
             console.log(temp);
            //var route_split = temp.length;
            let function_to_invoke = temp[0] || false;
            let params = null;
            //if(route_split > 1){
              //   params  = extract_params(temp[1]);
            //}

            //fire 
            if(function_to_invoke){
                switch (function_to_invoke) {
                    case 'home':
                        console.log('HomeController');
                        HomeController(function_to_invoke,params);
                        break;
                    case 'podteam':
                        PodTeamController(function_to_invoke,params);
                        break;
                    case 'mision':
                        MisionVisionController(function_to_invoke,params);
                        break;
                    case 'goals':
                        console.log('Cherries are $3.00 a pound.');
                        break;                   
                    default:
                        console.log('Sorry, we are out of ' + expr + '.');
                    }
            }
    }


};
