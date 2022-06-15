import { Component } from "react";

class Card extends Component{
  render(){     
    const {title,id,image, price}= this.props.mon;

    return (
      <div className='card-container' key={id}>
    <img src={image} alt="" srcSet="" className="img"/>
      

           <p>{title}</p>
           <p >{price}</p>
           {/* <p>Some text about the jeans..</p> */}
           <p><button>Add to Cart</button></p>
      </div>

    )
}
  
}
export default  Card;


