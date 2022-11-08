fetch("https://character-database.becode.xyz/characters")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
