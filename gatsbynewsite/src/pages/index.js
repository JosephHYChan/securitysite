import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Layout from '../components/layout';

import pic01 from '../assets/images/cyber-security-icon.jpg'
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
                        <Link to="/quiz/">Quiz</Link>
                    </div>
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2><strong>Summary of the website purpose</strong></h2>
                            </header>
                            <p>
                                The purpose of this website is to you
                                aspects of computer security that you might not know. This site contains information
                                and practical steps that you can take to secure yourself when using the internet. Each
                                page contains information on different areas of the Internet, and how you can 
                                secure yourself properly against threats.
                            </p>
                        </div>
                        <div className="col-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sdpxddDzXfE" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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