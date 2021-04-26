import React from 'react'

/*
An interface gives us the possibility to build a shape of props and in this typescript compiler 
can make a data type check.
The syntax below
*/

// Make sure to use capital letter
interface DataFromAppComponent{
    message:string,
    name:string 
}


function SimpleComponent(props: DataFromAppComponent):any {
    return (
        <div>
           {props.name}, {props.message}
        </div>
    )
}

export default SimpleComponent
