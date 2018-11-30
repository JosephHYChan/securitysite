import React from "react"
import { Link } from "gatsby";

import Layout from '../components/layout';

function emailsec () {
    return(
  <Layout>
      <div class="topnav">
        <Link to="/#home/">Home</Link>
        <Link to="/updatesoft/">Updating Software</Link>
        <Link to="/password/">Passwords</Link>
        <Link to="/sectools/">Security Tools</Link>
    </div>
    <div class = "title"><h1>Email Security</h1>    
        How to avoid phishing attacks:</div>
    <div class = "paragraph">
        <p><strong>These emails are so common:</strong> “log in here so we don't delete your account”. When you see emails like this, 
            it is because these emails are usually phishing scams designed to get your personal information by scaring you 
            or lying to you to get you to send personal information  to them or log in to a particular website that they made 
            so that they can take it from there. They might ask you to log into CIBC because “your account has been compromised”, 
            so they put a link in this email, which takes you to a website that looks similar to CIBC but the hackers have made themselves, 
            so they can get your personal information <br /><br />
            <strong>How to Avoid them</strong><br />
        <ol>
            <li>Learn about different kinds of phishing attacks</li>
            <li>Think before you click!</li>
            <li>Install an anti-phishing toolbar – they can check out the links in your emails and let you know if they are unsafe.</li>
            <li>Don't assume https:// means you are safe from being attack or scammed. A scammer can obtain a certificate for https:// for their
                fake site to lure you into a false sense of security.
            </li>
            <li>Check online account(s) regularly – so that you will know if anyone has hacked you, as you would remember your account activity. </li>
            <li>Use a Firewall – these can block unwanted software or hacking attempts. Having both a network firewall and a desktop one, is ideal!</li>
            <li>Don't click on the pop ups! - and don't click “cancel” on them, hit the “x” button in the corner! Hitting “cancel” will take you to a different website or create more pop-ups!</li>
            <li>Don't give out personal information online</li>
            <li>Use Anti-Virus software</li>
        </ol>
        <strong>Examples:</strong><br />
            <a href="https://www.makeuseof.com/tag/website-security-certificate-care/">Security Certificate Care</a><br />
            <a href="http://www.phishing.org/10-ways-to-avoid-phishing-scams">Avoid Phishing Scams</a>
        </p>
        </div>
        <div className="video">
            <body>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BnmneAjVrM4" frameborder="0" allow="accelerometer; 
            autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </body>
        </div>
  </Layout>
    )
}
export default emailsec