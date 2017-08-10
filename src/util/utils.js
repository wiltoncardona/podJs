
export const removeChild = ()=>{
    let el = document.getElementById('target');
    while (el.firstChild) {
        //The list is LIVE so it will re-index each call
        el.removeChild(el.firstChild);
    }

    
}

export const render = (data)=>{
    let el = document.getElementById('target');    
    el.appendChild(data);        
}

