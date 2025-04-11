/*
//Example 1
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Car extends React.Component {
  render() {
    return <h4>Hi, I am a Car! I am white in color. I belong to Jitesh Bhatia</h4>;
  }
}
function App(){
root.render(<Car />);
}//End App function 
export default App;
*/
/*
//Example 2
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Car(){
    return <h2>Hi, I am a Blue Car!</h2>;
  }
function App(){
root.render(<Car />);
}//End App function 
export default App;
*/


/*
//Example 3
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Car(props) {
    return <h2>I am a {props.color} Car! My number is {props.number}</h2>;
}
function App(){
root.render(<Car color="white" number="UP25CB9302"/>);
}//End App function 
export default App;
*/

/*
//Example 4
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Car {
  constructor(name) {
    this.brand = name;
  }
present() {
    return 'I have a ' + this.brand;
  }
}
const mycar = new Car("BMW");
function App(){
root.render(mycar.present());
}//End App function 
export default App;
*/


/*
//Example 5 (Inheritance)
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return 'I have a ' + this.brand;
  }
}
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
function App(){
root.render(mycar.show());
}//End App function 
export default App;
*/

/*
//Example 6 
import ReactDOM from 'react-dom/client';
const myArray = ['apple', 'banana', 'orange', 'guava'];
const myList = myArray.map((item) => <p>{item}</p>)
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//Define the App function used to render on the browser

function App(){
root.render(myList);
}//End App function 

//Export the App
export default App;
*/


//Example 7 
// import ReactDOM from 'react-dom/client';
// const myelement = (
//   <table border="1">
//     <tr><th>Name</th></tr>
//     <tr><td>John</td></tr>
//     <tr><td>Elsa</td></tr>
//     <tr><td>Nelson</td></tr>
//   </table>
// );
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// function App(){
// root.render(myelement);
// }//End App function 
// export default App;

/*
//Example 8
import React from 'react';
import ReactDOM from 'react-dom/client';
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "yellow"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}//End of class
const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
root.render(<Car />);
}
export default App;
*/



/*
//Example 9
import React from 'react';
import ReactDOM from 'react-dom/client';
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car is {this.state.model} of {this.state.brand} having {this.state.color} color, that was built in {this.state.year} </h1>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
root.render(<Car />);
}
export default App;
*/



/*
//Example 10
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './example1.js';
function App(){
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car brand="Mercedes" color="white" model="GLC" year="2025" />);
}//End App function 
export default App;
*/


/////////// portfolio creation
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Comments from './Components/Comments';
import Projects from './Components/Projects';
import './Components/style.css';
import Favorites from './Components/Favorites';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default class App extends Component{
    render(){
      return(
        <BrowserRouter>
        <div>
        <Navbar/>
          <Routes>
          <Route exact path="/" element={<Profile />}></Route>
          <Route exact path="/comments" element={<Comments />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
        </BrowserRouter>
      )
    }
}