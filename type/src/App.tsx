import logo from './logo.svg';
import SimpleComponent from "./SimpleComponent/SimpleComponent"

import './App.css';

function App() {

// Def string 
// let firstValue: string ="Richard"

// Def number
// let firstValue: number = 24

// Def boolean
// let firstValue: boolean = true

/* 1 Def array of something
1) Define the type of the array
2) Add the square brachets to it
let firstValue: number[] = [1,2,3]
*/

/* 2 Def array of something
1) Write Array
2) Add the triangle brackets in which you specify the type of array

let firstValue: Array<String> = ["1","2","3"]
*/

/*
Def a tuple: An array that contains multiple data types 
let aTuple:[string, number]= ["Richard", 24]
*/

/**
 Def enum: It's like an object where you store multiple items and you can also initialize them there
 enum Codes {first=1, second=2};
 */

 /* 
 Def any: We can use it when we don't know the type of data we are receiving maybe working with API's  
 let firstName: any = "Richardo"

 If you don't specifiy a return of a function, typescript will make autom to any 
 */

 /* 
 Def void: We use this for example when we are calling a function that doesn't return anything. 

 - Working with functions, we need to define the return type - 
 Below the syntax. In this case, we are not returning anything.

 const warning=():void =>{
   console.log("Worning")
 }
*/

let Name= 3


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         The value {Name} is of {typeof Name} type! 
        </p>
    <SimpleComponent message="This is a message passed from app.tsx "/>
      </header>
    </div>
  );
}

export default App;
