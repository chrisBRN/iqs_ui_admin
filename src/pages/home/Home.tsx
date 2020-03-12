import React from 'react';

import './Home.scss';

import Background from '../../shared/components/standard-background/Background';
import PublicNav from '../../shared/components/public-nav-bar/PublicNav';
import '../../shared/components/public-nav-bar/PublicNav.scss';

export default function Home() {

    return (

        <div className="home-page">

            <div className="page-wrapper">

                <Background />
                <PublicNav />

                <div className="main-section">

                    <h1 className="main-headline">Home Page</h1>

                    <section className="placeholder-left">

                        <h2>Sub Heading</h2>  

                        <div className="placeholder-summary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Fermentum et sollicitudin ac orci phasellus egestas. At augue eget arcu dictum varius duis at consectetur. Id cursus metus aliquam eleifend mi in nulla. Donec et odio pellentesque diam volutpat commodo. At auctor urna nunc id cursus. Justo eget magna fermentum iaculis eu. Non arcu risus quis varius. Ultricies integer quis auctor elit sed vulputate mi. Consequat interdum varius sit amet mattis vulputate enim. Ut consequat semper viverra nam libero. 
                        </div>   

                    </section>                  

                    <h1 className="quote">"...the Bestest Product and/or Service Ever..."</h1>
                    <h3 className="quote attribution"> - a very real customer</h3>
                    
                    <section className="placeholder-right">                       

                        <div className="placeholder-summary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Fermentum et sollicitudin ac orci phasellus egestas.  
                        </div>   

                    </section>
                    
                    

                </div>

            </div>

        </div>
    )
}