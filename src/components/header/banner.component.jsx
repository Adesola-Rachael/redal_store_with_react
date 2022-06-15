import { Component } from "react";
// import './banner.style.css';

class Banner extends Component{
    render(){
        return(
            
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                <h1>Stop and Shop<br/>  On Readal</h1>
                <h2>Shop Today, Shop tommorrow, Shop Everyday</h2>
                <a href="" className="btn-get-started">Shop Now</a>
                
                </div>
            </section>
        )
    }
}
export default Banner;