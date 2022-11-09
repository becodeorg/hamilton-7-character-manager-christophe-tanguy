import {traitement,traitementPost} from './requet.js';
import {createFiche,getDataForm} from './fiche.js';

let url = 'https://character-database.becode.xyz/characters';
traitement(url, createFiche);

//select id button in dom
let button = document.querySelector('#button');
button.addEventListener('click', traitementPost);

// function() {
//     traitementPost();//url,getDataForm
//     // console.log(getDataForm());
// });

// traitementPost(url,getDataForm);