import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = ()=>{
    //const categories = ['One Piece', 'Dragon Ball', "Uniyasha"]
    const [categories, setCategories] = useState(['One Piece'])
    //const handleAdd = cat => setCategories([...categories, 'Bleach'])
    return (
    <>
        <h1>gifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        <ol>
            {
            categories.map(cat =>{
                return <GifGrid key={cat} category={cat}/>
            })
            }
        </ol>
    </>)

}
export default GifExpertApp;