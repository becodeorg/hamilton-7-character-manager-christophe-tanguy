
export function createFiche(datas) {

    datas.forEach(data => {
        let html = `
        <li class="list__item">
            <div class= "list__div">    
                <img class="list__item__image" src="data:image/gif;base64,${data.image}" alt="">
                <h2 class="list__item__title">${data.name}</h2>
                <p class="list__item__description">
                    ${data.shortDescription}
                </p>
            </div>   
            <a class= "list__item__button" href="./pages/singleFiche.html?id=${data.id}">See character</a>
        </li> 
        `;
        document.querySelector('.list').innerHTML += html;
    });
}

export function afficheFiche(data) {
    let title = document.getElementsByClassName('fiche__item__title')[0];
    let image = document.getElementsByClassName('fiche__item__image')[0];
    let description = document.getElementsByClassName('fiche__item__description')[0];
    let shortDescription = document.getElementsByClassName('fiche__item__shortDescription')[0];
    console.log(data);
    //create texte

    title.appendChild(document.createTextNode(data.name));
    description.appendChild(document.createTextNode(data.description));
    shortDescription.appendChild(document.createTextNode(data.shortDescription));
    image.src = "data:image/gif;base64," + data.image;
}

export function setDataForm(data) {
    let name = document.getElementById('name');
    let smallDescription = document.getElementById('smallDescription');
    let description = document.getElementById('description');
    let image = document.getElementById('image');

    name.value = data.name;
    smallDescription.value = data.shortDescription;
    description.value = data.description;
    image.src = 'data:image/gif;base64,'+data.image;


    console.log("non");
}

export function updateImage()
{
    var selectedfile = document.getElementById("getimage").files;
    console.log("event");
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        var newImage = document.getElementById('image');
        newImage.src = srcData;
        console.log("event2");
        // document.getElementById("dummy").innerHTML = newImage.outerHTML;
        // document.getElementById("txt").value = document.getElementById("dummy").innerHTML;
        }
        fileReader.readAsDataURL(imageFile);
    }
}