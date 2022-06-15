import { Component } from "react";
import './navbar.style.css';
// import SearchBox from '../search-box/search-box.component';


class NavBar extends Component{
    render(){
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="index.html">Readal</a></h1>

            
                <nav id="navbar" className="navbar order-last order-lg-0">

                        <input 
                type="search" 
                placeholder={this.props.placeholder}
                className={this.props.className}
                onChange={this.props.onChangeHandler}/>
        

                {/* <SearchBox onChangeHandler={onsearchchange} placeholder={'Search Store'} className={'search-box'}/> */}

                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a className="active" href=" ">Service</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Sell</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                    
               


                </div>
            </header>
  
        )
    }
}
export default NavBar