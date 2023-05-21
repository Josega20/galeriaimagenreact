import React from 'react'
import "./Card.css"

const card = ({ url, title, description }) => {
    return (
        <div className='container'>
            <div>
                <img src={url} alt="imagen de animal" className='image'/>
            </div>
            <div >
                <h2 className='title'>{title}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

export default card