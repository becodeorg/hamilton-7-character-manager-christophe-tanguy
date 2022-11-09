
export function createFiche(datas) {

    datas.forEach(data => {
        let html = `
        <li class="list__item">
            <img class="list__item__image" src="data:image/gif;base64,${data.image}" alt="">
            <h2 class="list__item__title">${data.name}</h2>
            <p class="list__item__description">
                ${data.description}
            </p>
            <input class="list__item__button" type="button" value="See Character">
        </li> 
        `;
        document.querySelector('.list').innerHTML += html;
    });
}