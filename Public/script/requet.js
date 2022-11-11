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

export function getDataForm(url,id) 
{
    let img = document.getElementById('image');
    var res = img.src.replace('data:', '').replace(/^.+,/, '');
    
    var data = {
        name: document.getElementById('name').value,
        shortDescription: document.getElementById('smallDescription').value,
        description: document.getElementById('description').value,
        image: res
    };
    
    if (id != null)
    {
        axios.put(url, data)
    }
    else
    {
        axios.post(url, data);
    }
}


export async function deleteFiche(url) {
    await axios.delete(url);
    window.location.href = "../index.html";
}