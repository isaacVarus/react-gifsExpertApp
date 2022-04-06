const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=tdQN87SoH6Gd31P5apt9gRle03tpi4gT`
const respuesta = await fetch(url);
const {data} = await respuesta.json();
const gifs = data.map(i =>{
    return {
        id : i.id,
        title: i.title,
        url: i.images?.downsized_medium.url
    }
}); 
console.log(gifs)
return gifs; //setImages(gifs)
}

export default getGif;