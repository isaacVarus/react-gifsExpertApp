import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (text)=>{
        setInputValue(text.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length >2){
            setCategories((cat)=>{
                return [inputValue, ...cat]
            })
            setInputValue('')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange}></input>
    </form>
  )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory