
import {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './text.css';

class App extends Component { 
  constructor(){
    super();
    this.state={
      infos:[
        {
        name:'becky',
        id:'123aab',
        cla:'pry2',
        Age:'6',
        location:{
          street:'cole',
          city:'dolo',
          country:'nig'
        },
        },

        
        {
        name:'tolu',
        id:'123bab',
        cla:'pry2',
        Age:'5',
        location:{
          street:'cole',
          city:'domo',
          country:'beng'
        },
        },

      
        {
        name:'pero',
        id:'123alb',
        cla:'pry3',
        Age:'7',
        location:{
          street:'cmole',
          city:'dwelo',
          country:'niodo'
        },
        } ,

        {
          name:'Tola',
          id:'123tab',
          cla:'pry8',
          Age:'6',
          location:{
            street:'dpole',
            city:'dogho',
            country:'nteg'
          },
        } ,
      ],
     
      mons:[],
    };
    console.log('1')
  }
  componentDidMount(){
    console.log('3')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>this.setState(()=>
    {
      return {mons:users}
    },
    ()=>console.log(this.state)
    ))
  }
  render (){
    console.log('2')
    return (
      <div className="App">
        <div className="text">Welcome to my first react  app</div>
          {
            this.state.infos.map((info)=>{
            return <h1 key={info.id}>name:{info.name}<br/>city:{info.location.city}</h1>
            })
          }

{
            this.state.mons.map((mon)=>{
            return <h1 key={mon.id}>name:{mon.name}</h1>
            })
          }
       
      </div>
    );
  }
  
}

export default App;
