import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css';
import GifExpertApp from './GifExpertApp'
//import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'))
root.render(
  <GifExpertApp/>
);

/*import { createElement } from "react";

const api_key = "tdQN87SoH6Gd31P5apt9gRle03tpi4gT";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

peticion.then(res =>res.json())
.then(({data}) =>{
    const {url} = data.images.original
    let img = document.createElement('img')
    img.src = url;
    document.body.append(img)
    console.log(data.images.original.url)
})
.catch(console.warn)*/



