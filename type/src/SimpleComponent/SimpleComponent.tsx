import React from 'react'

function SimpleComponent(props: {message:string}) {
    return (
        <div>
           {props.message}
        </div>
    )
}

export default SimpleComponent
