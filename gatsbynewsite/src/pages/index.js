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

                <section id="onepointtwo" className="main style1">
                    <div class="topnav">
                    <Link to="/#home/">Home</Link>
                        <Link to="/updatesoft/">Updating Software</Link>
                        <Link to="/password/">Passwords</Link>
                        <Link to="/emailsec/">Email Security</Link>
                        <Link to="/sectools/">Security Tools</Link>
                        <a href="#about">About</a>
                    </div>
                </section>

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Summary of the website purpose</h2>
                            </header>
                            <p></p>
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