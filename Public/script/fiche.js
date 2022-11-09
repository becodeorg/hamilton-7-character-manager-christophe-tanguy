
export function createFiche(datas) {

    datas.forEach(data => {
        let html = `
        <li class="list__item">
            <div class= "list__div">    
                 <img class="list__item__image" src="data:image/gif;base64,${data.image}" alt="">
                 <h2 class="list__item__title">${data.name}</h2>
                 <p class="list__item__description">
                     ${data.description}
                </p>
             </div>   
            <a class= "list__item__button" href="#">See character</a>
        
        </li> 
        `;
        document.querySelector('.list').innerHTML += html;
    });
}