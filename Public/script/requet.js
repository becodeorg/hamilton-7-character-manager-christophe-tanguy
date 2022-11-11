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

export function getDataForm(url,id) {

    var selectedfile = document.getElementById("image").files;
    var txt;

    if (selectedfile.length > 0) 
    {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();

        fileReader.onload = async function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result;
            console.log("ddd: "+srcData);
            
            var res = srcData.replace('data:', '').replace(/^.+,/, '');
            
            var data = {
                name: document.getElementById('name').value,
                shortDescription: document.getElementById('smallDescription').value,
                description: document.getElementById('description').value,
                image: res
            };
            //suprimmer base64 d'un string
            console.log("ttt: "+data.image);
            
            if (id != null)
            {
                axios.put(url, data)
            }
            else
            {
                axios.post(url, data);
            }
        }
        fileReader.readAsDataURL(imageFile);
    }
}

export async function deleteFiche(url) {
    await axios.delete(url);
    window.location.href = "../index.html";
}