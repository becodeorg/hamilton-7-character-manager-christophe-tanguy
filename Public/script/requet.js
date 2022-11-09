import axios from 'axios';
// export * from './requet.js';

export async function traitement(url,method)
{
    await axios.get(url)
    .then(function (response) {
        console.log(response);
        return response.data;
    })
    .then(function (data) {
        method(data);
        })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export async function traitementPost()//url,method
{
    let url = 'https://character-database.becode.xyz/characters';
    let tmp = method();

    let data = {
        name: "Loic",
        shortDescription : "codeur becode",
        // image : "moi",
        description : "loremp ipsum"};
    // console.log("post :"+tmp);
    await axios.post(url, tmp);
}