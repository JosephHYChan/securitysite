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
    <div class ="paragraph">
    <h1>Frequency of Updating software</h1>
    <p><strong>Description:</strong> Updating software is a good way to protect against security threats. By updating a computer's software, 
      it can then block the highest number of threats from accessing the computer. Many computers have automatic update features 
      which can make this a lot easier, updating at a certain time every week, or through the windows prompt which comes up every 
      day asking you to update. Information about updates can often be found online. <br /><br />
      <strong>Why it's important:</strong> Often hackers try to hack outdated versions of software, since they are easier to hack than more recent 
      ones. Computer documents can often be at stake, when a computer has outdated software, and in some cases, these documents can 
      be wiped out or held ransom by hacker(s). As well, it can mean you will miss out new and useful features that come bundled with 
      those updates, some of which can help protect your computer in new ways. The WannaCry attack was based on people not updating their 
      software. which infected 200,000 people's computers, exploited the fact people do not keep their software up-to-date<br /><br />
      <strong>Is my computer up to date?:</strong> If your computer has Windows 7 or lower, then 
      <a href ="http://www.microsoft.com/en-ca/download/details.aspx?id=19892"> Microsoft Baseline Security Analyzer </a> 
      could be the right tool for you. This software will tell you which updates you need for your windows computer. 


    “Patch my PC updater” is a great tool to install which will check all of the programs on your pc to see if any are out of date. 
    You can download it at this link, and it does not need to be installed. As soon as it is downloaded, you can run it, and it can 
    begin installing the majority of your software updates for you. Once it opens, just press the button in the right corner to start 
    installing most of the updates your computer needs. Download it 
    <a href = "https://patchmypc.com/home-updater-download"> here </a>
    <br /><br />
    </p>
  </div>
  <div class = "onevid">
  <body> 
    <strong>WannaCry Video Explanation</strong>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cZ543_0bjbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </body>
    </div>
  </Layout>
    )
}
export default updatesoft
