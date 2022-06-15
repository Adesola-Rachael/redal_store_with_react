
import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Banner from './components/header/banner.component';
import BreadCrumb from './components/header/breadcrumb.component';
import NavBar from './components/nav/nav-bar.component';
import  Footer from './components/footer/footer.component';


import './App.css';
import './text.css';
import './components/icon.component.css';

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

      searchfield:'',
    };
  }
  componentDidMount(){
    //  fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then((products)=>this.setState(()=>
    {
      return {mons:products}
    }
    // ()=>console.log(this.state)
    ))
  }
  onsearchchange= (event)=>
  {
   // console.log(event.target.value);
   const searchfield=event.target.value.toLowerCase();

 this.setState(()=>{
   return {searchfield};
 });

 }
  render (){
    const{searchfield,mons}=this.state;
    const{onsearchchange}=this;
    
    const filteredMonsters= mons.filter((mon)=>{
      return mon.title.toLowerCase().includes(searchfield);
    });
    
 
    return (
      <div className="App">
        <NavBar onChangeHandler={onsearchchange} placeholder={'Search Store'} className={'search-box'}/>

        <Banner/>
        {/* <BreadCrumb/> */}
           {/* <SearchBox onChangeHandler={onsearchchange} placeholder={'Search Store'} className={'search-box'}/> */}

          {
            // this.state.infos.map((info)=>{
            // return <h1 key={info.id}>name:{info.name}<br/>city:{info.location.city}</h1>
            // })
          }

{/* {
          filteredMonsters.map((mon)=>{
            return <h1 key={mon.id}>name:{mon.title}</h1>
            })
          } */}
          
          <CardList mons={filteredMonsters}/>
          <Footer/>
      </div>
    );
  }
  
}

export default App;
