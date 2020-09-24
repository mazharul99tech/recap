import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [{name: 'Laptop', price: '$566'}, {name: 'Phone', price: '$754'}, {name: 'Camera', price: '$853'}, {name: 'Desktop', price: '$345'}, {name: 'Frizz', price: '$456'}]
  // const nayoks = [{name: 'Aamir', age: '21'}, {name: 'Salman', age: '34'}, {name: 'Deepjol', age: '65'}, {name: 'Shahrukh', age: '76'}, {name: 'Mazharul', age: '23'}];
  const [nayoks, setNoyoks] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNoyoks(data))
  }, [])
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
      }
    </div>
  );
}

function Product(props){
  return(
    <div style={{border: '2px solid tomato', margin: '10px'}}>
      <h2>High Configuration products: {props.name}</h2>
      <h4>Simple But Unique Product Price: {props.price}</h4>
    </div>
  )
}

function MovieCounter(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add movies</button>
      <h3>Number of Movies: {count}</h3>
      <MoviesDisplay movies={count}></MoviesDisplay>
      <MoviesDisplay movies={count + 5}></MoviesDisplay>
      <MoviesDisplay movies={count}></MoviesDisplay>
      <MoviesDisplay movies={count + 10}></MoviesDisplay>
    </div>
  )
}

function MoviesDisplay(props) {
    return <h4>I have act movies: {props.movies}</h4>
}

function Nayok(props){
  // console.log(props.name);
  const nayokStyle={
    border: '1px solid purple',
    margin: '10px'
  }
  return( 
    <div style={nayokStyle}>
      <h1>Ami Nayok - {props.name} {props.last}</h1>
      <p>I have done 5 movies in {props.age || 67} years</p>
    </div>
  );
}

export default App;
