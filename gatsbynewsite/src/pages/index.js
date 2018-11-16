import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Security Website";
        return (
            <Layout>
                <Helmet title={siteTitle} />
                    <div class="topnav">
                    <Link to="/#home/">Home</Link>
                        <Link to="/updatesoft/">Updating Software</Link>
                        <Link to="/password/">Passwords</Link>
                        <Link to="/emailsec/">Email Security</Link>
                        <Link to="/sectools/">Security Tools</Link>
                        <a href="#about">About</a>
                    </div>
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2><strong>Summary of the website purpose</strong></h2>
                            </header>
                            <p>
                                The purpose of this website is to teach people
                                aspects of computer security that they may not know. 
                                Please look at as many of the topics as you can.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                        
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;