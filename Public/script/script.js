import {traitement} from './requet.js';
import {createFiche} from './fiche.js';

let url = 'https://character-database.becode.xyz/characters';
traitement(url, createFiche);