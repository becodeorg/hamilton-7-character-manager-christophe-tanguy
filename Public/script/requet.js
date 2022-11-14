import axios from 'axios';

export async function request(url, method, data, callback) {
    await axios({
        method: method,
        url: url,
        data: data,
    })
    .then(function (response) {
        callback(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function backHome(data)
{
    window.location.href = "../index.html";
}

export function getDataForm()
{
    let title = document.getElementById('name');
    let image = document.getElementById('image');
    let description = document.querySelector("trix-editor");
    let shortDescription = document.getElementById('shortDescription');
    let data = {
        name: title.value,
        description: description.editor.getDocument().toString(),
        shortDescription: shortDescription.value,
        image: image.src.replace(/^.+,/, '')
    };
    
    return data;
}