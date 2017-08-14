export const teamView = (person)=>{
    return `
        <div>
            <section> 
            <img class="img-circle" src="${person.photoUrl}" alt="Generic placeholder image" width="140" height="140">
            <h2>${person.firstName} ${person.lastName} </h2>
            <p><strong>Email:</strong>  ${person.email}</p> 
            <h4>Role</h4>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a class="btn-link" href="#/team/${person.id}" role="button">View details »</a></p>
            </section>
        </div>
    `

}