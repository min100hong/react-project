import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    id:'1',
    img:'https://placeimg.com/64/64/1',
    name:'민백홍',
    birthday:'690309',
    gender:'남자',
    job:'프로그래머'
  },
  {
    id:'2',
    img:'https://placeimg.com/64/64/2',
    name:'이순신',
    birthday:'690309',
    gender:'남자',
    job:'디자이너'
  },
  {
    id:'3',
    img:'https://placeimg.com/64/64/3',
    name:'홍길동',
    birthday:'690309',
    gender:'남자',
    job:'설계자'
  },
]

class App extends React.Component {
  render () {
    return(
      <div>
        {
          customers.map( c => { 
            return (<Customer
              key={c.id} 
              id={c.id}
              img={c.img}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            /> );
          })
        }
      </div>
    );
  }
}

export default App;
