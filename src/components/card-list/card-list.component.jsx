import {Component} from 'react';
import './card.style.css';
import Card from '../card/card.component';

class CardList extends Component {
    render(){

        //  console.log('render')
        // console.log("boboooo")
        const {mons}=this.props;

        return(
           <div className='card-list'>
              {mons.map((mon)=>( 
              <Card mon={mon} />
              ))}
              
              
          
           
              
           </div> 
        );
        
    }
}
export default CardList;
