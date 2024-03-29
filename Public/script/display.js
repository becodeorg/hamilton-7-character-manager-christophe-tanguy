import * as myError from './error.js';
// import * as showdown from 'showdown';

export function generateCart(data)
{
    const nbCart = 8;
    let nameSearch = myError.getValueURL(`name`, ``);
    if (nameSearch != ``)
    {
        nameSearch = nameSearch.toLowerCase();
    }

    let page = (myError.getValueURL(`page`, 1)-1)*nbCart;
    let html = ``;

    data.sort(function(a, b) {return a.name.toLowerCase().localeCompare(b.name.toLowerCase());});

    for (let i = 0,j = 0; j<nbCart && page+i < data.length; i++)
    {
        if (data[page+i].name.toLowerCase().includes(nameSearch)) {
            html += `
            <li class="list__item">
                <div class= "list__item__data">    
                    <img class="list__item__data__image" src="data:image/gif;base64,${data[page+i].image}" alt="">
                    <h2 class="list__item__data__title">${data[page+i].name}</h2>
                    <p class="list__item__data__shortDescription">
                        ${data[page+i].shortDescription}
                    </p>
                </div>   
                <a class= "button--full" href="./singleFiche.html?id=${data[page+i].id}">See character</a>
            </li> 
            `;
            
            j++;
        }
    };
    document.querySelector('.list').innerHTML = html;

    genaratePagination(data, nameSearch,page/nbCart+1);

}

export function generateFiche(data)
{
    // ----------------- récupére les conteneurs
    let title = document.getElementsByClassName('fiche__data__txt__title')[0];
    let image = document.getElementsByClassName('fiche__data__image')[0];
    let description = document.getElementsByClassName('fiche__data__txt__description')[0];
    let shortDescription = document.getElementsByClassName('fiche__data__txt__shortDescription')[0];

    // let converter = new showdown.Converter();
    // let html      = converter.makeHtml(data.description);
    
    
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
    // let description = document.getElementById('description');
    let description = document.querySelector("trix-editor");
    let shortDescription = document.getElementById('shortDescription');

    // ----------------- remplis les conteneurs
    title.value = data.name;
    description.editor.insertString(data.description);
    shortDescription.value = data.shortDescription;
    image.src = "data:image/gif;base64," + data.image;
}

export function generateButtonForm(value,classe,id)
{
    let btn = document.createElement(`div`);
    btn.classList.add(classe);
    btn.appendChild(document.createTextNode(value));
    btn.id = id;

    document.getElementsByClassName(`form__button`)[0].appendChild(btn);
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

function genaratePagination(data, search, pgcurent)
{
    
    let nbpage = getNbPage(data, search);
    --pgcurent;
    // ----------------- génère les boutons
    if(pgcurent > 0)
    {
        addPage(search, `<<`,pgcurent);
    }
    addPage(search, `1`,1);
    for (let i = 1; i < nbpage-1; i++)
    {

        if (i == pgcurent-1 || i == pgcurent || i == pgcurent+1)
        {
            addPage(search, `${i+1}`,i+1);
        }
        else if (i == pgcurent-2 || i == pgcurent+2)
        {
            addPage(search, `...`,i+1);
        }
    }
    addPage(search, nbpage,nbpage);
    if(pgcurent < nbpage-1)
        {
            addPage(search, `>>`,pgcurent+2);
        }

    //select the current page
    if (pgcurent > 0)
    {
        ++pgcurent;
    }
        document.getElementsByClassName(`button--nav`)[pgcurent].classList.add(`button--nav--selected`);

}

function getNbPage(data, search)
{
    let nbpage = 1;
    // ----------------- donne le nombre de page
    if (search != ``)
    {
        data.forEach(element => {
            if (element.name.toLowerCase().includes(search)) {
                nbpage++;
            }
        });

        nbpage = Math.ceil(nbpage/8);
    }
    else
    {
        nbpage = Math.ceil(data.length/8);
    }
    return nbpage;
}

function addPage(search,txt, page)
{
    let html = 
        `
            <a class="button--nav" href="./list.html?$search=${search}&page=${page}">${txt}</a>
        `;
        document.getElementsByClassName(`nav`)[0].innerHTML += html;
}