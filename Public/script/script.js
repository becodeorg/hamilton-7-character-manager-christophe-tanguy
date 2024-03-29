import * as request from './requet.js';
import * as display from './display.js';
import * as myError from './error.js';

let api = 'https://character-database.becode.xyz/characters';

// ----------- traitement de l'url
let url = window.location;
let page = url.toString().replace(/[?].{1,}/, "").split('/');
// console.log("value url: "+page);

let id = myError.getValueURL(`id`, ``);

// console.log("value id: "+id);

// ----------- vérification de la page
switch (page[page.length-1]) {
// si la page est la page list
    case 'list.html':
        console.log("list"+page[page.length-1]);
        // requet.traitement(api, fiche.createListe);
        request.request(api, 'get', null, display.generateCart);

        let search = document.getElementById('search');
        search.addEventListener('search', function() {
            window.location.href = `./list.html?name=${search.value}`;
            console.log("search");
        });

        break;

// si la page est la page de fiche
    case 'singleFiche.html':
        console.log("singleFiche"+page[page.length-1]);
        request.request(api + '/' + id, 'get', null, display.generateFiche);

        //initiolisation du bouton delete
        let deteltButton = document.getElementById('delete');
        deteltButton.addEventListener('click', function() {
            // requet.deleteFiche(api + "/" + id);
            let answer = confirm("Are you sure you want to delete this character?");
            if (answer) {
                request.request(api+"/"+id, 'delete', null, request.backHome);
            }
        });

        //initiolisation du bouton edit
        let editButton = document.getElementById('edit');
        editButton.addEventListener('click', function() {
            window.location.href = "./form.html?id=" + id;
        });
        break;

// si la page est la page de création/modification
    case 'form.html':
        console.log("form");
        let method = 'post';
        if (id != ``) {
            // console.log("edit : " + id);
            api = api + '/' + id;
            request.request(api, 'get', null, display.generateForm);
            method = 'put';
            display.generateButtonForm(`delete`,`button--empty`,`delete`);

            let deteltButto = document.getElementById('delete');
            deteltButto.addEventListener('click', function() {
                // requet.deleteFiche(api + "/" + id);
                let answer = confirm("Are you sure you want to delete this character?");
                if (answer) {
                    request.request(api+"/"+id, 'delete', null, request.backHome);
            }
        });
        }

        //initiolisation du bouton submit
        let submitButton = document.getElementById('save');
        submitButton.addEventListener('click', function() {
            request.request(api, method, request.getDataForm(), request.backHome);
        });

        

        //initiolisation du selecteur image
        let change = document.getElementById('getimage');
        change.addEventListener('change', display.updateImage);
        break;
// si la page n'est pas reconnue
    default:
        console.log("page inconnue");
        console.log("page inconnue", page[page.length - 1]);
        window.location.href = "./pages/list.html?page=1";
}