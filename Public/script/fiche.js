import * as myError from './error.js';

export function generateCart(data)
{
    const nbCart = 32;
    let nameSearch = myError.getValueURL(`name`, ``);
    if (nameSearch != ``)
    {
        nameSearch = nameSearch.toLowerCase();
    }
    let page = (myError.getValueURL(`page`, 1)-1)*nbCart;
    
    for (let i = 0; i<nbCart && page+i < data.length; i++)
    {
        if (data[page+i].name.toLowerCase().includes(nameSearch)) {
            let html = `
            <li class="list__item">
                <div class= "list__data">    
                    <img class="list__item__data__image" src="data:image/gif;base64,${data[page+i].image}" alt="">
                    <h2 class="list__item__data__title">${data[page+i].name}</h2>
                    <p class="list__item__data__shortDescription">
                        ${data[page+i].shortDescription}
                    </p>
                </div>   
                <a class= "list__item__button" href="./singleFiche.html?id=${data[page+i].id}">See character</a>
            </li> 
            `;
            document.querySelector('.list').innerHTML += html;
        }
        else
        {
            i--;
        }
    };

}

export function generateFiche(data)
{
    // ----------------- récupére les conteneurs
    let title = document.getElementsByClassName('fiche__item__title')[0];
    let image = document.getElementsByClassName('fiche__item__image')[0];
    let description = document.getElementsByClassName('fiche__item__description')[0];
    let shortDescription = document.getElementsByClassName('fiche__item__shortDescription')[0];
    console.log(data);

    // ----------------- remplis les conteneurs
    title.appendChild(document.createTextNode(data.name));
    description.appendChild(document.createTextNode(data.description));
    shortDescription.appendChild(document.createTextNode(data.shortDescription));
    image.src = "data:image/gif;base64," + data.image;
}

export function generateForm(data)
{
    // ----------------- récupére les conteneurs
    let title = document.getElementById('name');
    let image = document.getElementById('image');
    let description = document.getElementById('description');
    let shortDescription = document.getElementById('shortDescription');

    // ----------------- remplis les conteneurs
    title.value = data.name;
    description.value = data.description;
    shortDescription.value = data.shortDescription;
    image.src = "data:image/gif;base64," + data.image;
}

export function updateImage()
{
    var selectedfile = document.getElementById("getimage").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        var newImage = document.getElementById('image');
        newImage.src = srcData;
        }
        fileReader.readAsDataURL(imageFile);
    }
}