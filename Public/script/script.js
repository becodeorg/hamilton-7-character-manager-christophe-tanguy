import {traitement,traitementPost} from './requet.js';
import {createFiche,getDataForm} from './fiche.js';

let url = 'https://character-database.becode.xyz/characters';
traitement(url, createFiche);

let button = document.querySelector('#button');
button.addEventListener('click', function() {
    // traitementPost(url,getDataForm);
    // console.log(getDataForm());
    console.log('test');
});