import React from 'react'

export default function RenderImage(props) {
    return (
        <div>
            <img src={ props.renderImage} alt='Rob and Larry' />
        </div>
    )
}