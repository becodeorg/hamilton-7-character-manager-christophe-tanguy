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

export function traitementPost(url,method)
{
    let tmp = method();
    console.log(tmp);
    // await axios.post(url, tmp);
}