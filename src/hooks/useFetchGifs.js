import { useEffect, useState } from "react"
import getGif from "../helpers/getGifs"


export const useFetchGifs = (category)=>{
    //const [images, setImages] = useState([])

    const [state, setState] = useState({
        data:[],
        loading : true
    })

    useEffect(() => {
      getGif(category)
      .then(res=>{
      //    setTimeout(() => {
        setState({
            data: res,
            loading: false
        })
    //}, 2000);
      })
    }, [category])
    

    // setTimeout(() => {
    //     setState({
    //         data: [123],
    //         loading: false
    //     })
    //     //state.loading = false
    // }, 2000);

    return state;
}