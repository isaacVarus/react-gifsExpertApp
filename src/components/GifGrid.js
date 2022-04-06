import React, { useEffect, useState } from 'react'
import getGif from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
    const {loading, data:images} = useFetchGifs(category)

  return (<>
  <h3>{category}</h3>
  <h3>{loading && 'Cargando...'}</h3>
  <div className='card-grid'>
        {images.map((img) => {
            return <GifGridItem key={img.id} {...img}/>
        })}
    </div>
    </>)
}

export default GifGrid