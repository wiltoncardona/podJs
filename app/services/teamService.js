

export class  TeamService {
    constructor(){
         this.API_URL = 'data.json';
    }

    getTeam(){
        return fetch(this.API_URL)
            .then(this.handleErrors)
            .then(res => res.json());
    }

    getPerson(id){
        console.log(`Finding ${id}`);

        return fetch(`${this.API_URL}`)
            .then(this.handleErrors)
            .then(res => res.json())
            .then(data => data.team.filter(data=>data.id==id))
            
            ;
            
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}