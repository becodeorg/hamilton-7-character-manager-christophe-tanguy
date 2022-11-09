
export function createFiche(datas) {

    datas.forEach(data => {
        let html = `
        <li class="list__item">
            <img class="list__item__image" src="data:image/gif;base64,${data.image}" alt="">
            <h2 class="list__item__title">${data.name}</h2>
            <p class="list__item__description">
                ${data.shortDescription}
            </p>
            <input class="list__item__button" type="button" value="See Character">
        </li> 
        `;
        document.querySelector('.list').innerHTML += html;
    });
}

export function getDataForm() {
    let data = {
        name: document.getElementById('name').value,
        shortDescription: document.getElementById('smallDescription').value,
        description: document.getElementById('description').value,
        // image: document.querySelector('#image').value
    };
    console.log('get data form :'+data);
    // return data;
}