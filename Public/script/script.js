import {traitement,getDataForm,deleteFiche} from './requet.js';
import {createFiche,afficheFiche} from './fiche.js';


let urlW = window.location;
let api = 'https://character-database.becode.xyz/characters';
// split url
var url = urlW.toString();
var urlSplit = url.split(/[/?]/);
console.log("ici : "+urlSplit);
if (urlSplit[3] == "" || urlSplit[3] == "index.html")
{
    console.log("index");
    traitement(api, createFiche);
} 
else if (urlSplit[4] == "form.html")
{
    console.log("form");
    let button = document.querySelector('#button');
    button.addEventListener('click', function() {
        getDataForm(api);
    });
}
else if (urlSplit[4] == "singleFiche.html")
{
    console.log("single fiche");
    let urlParams = new URLSearchParams(urlW.search);
    let id = urlParams.get('id');
    traitement(api + "/" + id, afficheFiche);

    let deteltButton = document.getElementById('delete');
    deteltButton.addEventListener('click', function() {
        deleteFiche(api + "/" + id);
    });

}
else 
{
    console.log("404");
}