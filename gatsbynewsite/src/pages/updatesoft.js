import React from "react"
import { Link } from "gatsby";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'

function updatesoft () {
    return(
  <Layout>
     <div class="topnav">
        <Link to="/#home/">Home</Link>
        <Link to="/password/">Passwords</Link>
        <Link to="/emailsec/">Email Security</Link>
        <Link to="/sectools/">Security Tools</Link>
    </div>
    <div>
    <h1>Frequency of Updating software</h1>
    <p>Description: Updating software is a good way to protect against security threats. By updating a computer's software, <br />
    it can then block the highest number of threats from accessing the computer. Many computers have automatic update features <br />
    which can make this a lot easier, updating at a certain time every week, or through the windows prompt which comes up every <br />
    day asking you to update. Information about updates can often be found online. <br /><br />
    Why it's important: Often hackers try to hack outdated versions of software, since they are easier to hack than more recent ones. <br />
    Computer documents can often be at stake, when a computer has outdated software, and in some cases, these documents can be wiped out <br />
    or held ransom by hacker(s). As well, it can mean you will miss out new and useful features that come bundled with those updates, some <br />
    of which can help protect your computer in new ways. The WannaCry attack was based on people not updating their software.<br /><br />
    Is my computer up to date?: If your computer has windows 7 or lower, then Microsoft Baseline Security Analyzer could be the right tool for you.<br /> 
    This software will tell you which updates you need for your windows computer. <br /></p>

    <body>
        <object data="http://www.youtube.com/embed/cZ543_0bjbw"
        width="560" height="315"></object>
    </body>
  </div>
  </Layout>
    )
}
export default updatesoft
