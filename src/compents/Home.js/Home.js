import React from "react";
import Header from "./Header";
import './Home.css';
import period from "./../../imges/1.jpg"
import about from "./../../imges/2.png";
import Data from "../../Data";
import Carousel from 'react-bootstrap/Carousel';
import item2 from './../../imges/a2.jpg';
import item1 from './../../imges/a1.jpg';




 const Home=()=>{
     const blogitem =Data.map((item)=>{
        return(
            <div className="col-md-4">
            <div className="box">

            <img src={item.img}/>
        <h5>{item.title}</h5>
        <span>{item.time}</span>
        <h6>{item.price}</h6>
        <button><a href="#">order now</a></button>
            </div>
       

        </div>

         
        )
    
     })
    return(
        <>
        <Header/>
        <section className="number">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVING</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>3287+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>2287+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>1557+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </section>
        <section className="period">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={period} title="img"/>
                   

                    </div>
                    <div className="col-md-6">
                    <h2>We pride ourselves on making real food from the best ingredients</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button>Learn More</button>
                   

                   </div>
                </div>
            </div>
        </section>
        <section className="about">
        <div className="container">
         <div className="row">
            <div className="col-md-6">

<h2>We make everything by hand with the best possible ingredients.
</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<ul>
    <li>Etiam sed dolor ac diam volutpat.</li>
    <li>Erat volutpat aliquet imperdiet.
</li>
    <li>purus a odio finibus bibendum.
</li>
</ul>
                    <button>Learn More</button>

            </div>
            <div className="col-md-6">
            <img src={about} title="img"/>

            </div>
         </div>
        </div>

        
        </section>
        <section className="perlx">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <h2>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.

</p>
  <a href="#">Watch our story</a>
            </div>
        </div>
        </div>

        </section>
        <section className="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
            </div>
            <div className="row">
            {blogitem}
            </div>
            
        </div>
        </section>
        <section className="slider">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <Carousel>
      <Carousel.Item>
        <img   src={item1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img   src={item2}/>


        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
             </div>
        </div>
     
        </section>
        </>
    )
}

export default Home;