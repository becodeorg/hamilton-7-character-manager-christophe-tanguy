import {traitement,getDataForm,deleteFiche} from './requet.js';
import {createFiche,afficheFiche,setDataForm} from './fiche.js';


let urlW = window.location;
let api = 'https://character-database.becode.xyz/characters';
// split url
var url = urlW.toString();
var urlSplit = url.split(/[/?]/);
console.log("ici : "+urlSplit);

let urlParams = new URLSearchParams(urlW.search);
let id = urlParams.get('id');

if (urlSplit[3] == "" || urlSplit[3] == "index.html")
{
    console.log("index");
    traitement(api, createFiche);
} 
else if (urlSplit[4] == "form.html")
{
    console.log("form");
    if (id != null)
    {
        traitement(api + "/" + id, setDataForm);
        api = api + "/" + id;
    }

    let button = document.querySelector('#save');
    button.addEventListener('click', function() {
        getDataForm(api, id);
    });
}
else if (urlSplit[4] == "singleFiche.html")
{
    console.log("single fiche");
    traitement(api + "/" + id, afficheFiche);

    let deteltButton = document.getElementById('delete');
    deteltButton.addEventListener('click', function() {
        deleteFiche(api + "/" + id);
    });

    let editButton = document.getElementById('edit');
    editButton.addEventListener('click', function() {
        window.location.href = "./form.html?id=" + id;
    });
}
else 
{
    console.log("404");
}