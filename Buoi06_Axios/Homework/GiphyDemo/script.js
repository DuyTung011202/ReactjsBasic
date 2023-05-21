
let btn_search = document.querySelector('#btn-search');
let btn_remove = document.querySelector('#btn-remove');

btn_search.onclick = () => {
    let searchValue = document.querySelector('#inputGif').value
    let gifs = document.querySelector('#gifs')
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=c5sW79KjBia42meYqKaCMBSumcb8HxQU`)
        .then((data) => {
            let data_array = data.data.data
            let data_length = data_array.length
            data = data_array[Math.floor(Math.random() * data_length) + 1].embed_url
            gifs.innerHTML += `<iframe src="${data}" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
            console.log(data)
        })
}

btn_remove.onclick = () => {
    gifs.innerHTML = ''
}

