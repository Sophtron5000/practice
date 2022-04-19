fetch('http://www.omdbapi.com/?i=tt3896197&apikey=1cd87e6e')
.then(response =>response.json())
.then(data => {
    console.log(data)})



