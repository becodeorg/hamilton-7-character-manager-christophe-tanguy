import {traitement,getDataForm} from './requet.js';
import {createFiche,afficheFiche} from './fiche.js';


let urlW = window.location;
let api = 'https://character-database.becode.xyz/characters';
// split url
var url = urlW.toString();
var urlSplit = url.split(/[/?]/);
console.log("ici : "+urlSplit);
if (urlSplit[3] == "") 
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
    var urlParams = new URLSearchParams(urlW.search);
    var id = urlParams.get('id');
    traitement(api + "/" + id, afficheFiche);

}
else 
{
    console.log("404");
}