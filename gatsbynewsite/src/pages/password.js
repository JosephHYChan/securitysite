import React from "react"
import { Link } from "gatsby";

import Layout from '../components/layout';

function password () {
    return(
  <Layout>
      <div class="topnav">
        <Link to="/#home/">Home</Link>
        <Link to="/updatesoft/">Updating Software</Link>
        <Link to="/emailsec/">Email Security</Link>
        <Link to="/sectools/">Security Tools</Link>
    </div>
    <div class = "title">
        <h1>Strong Passwords(What do you mean Strong Password? Mine's strong enough! I remember it, that's all I need!)</h1></div>
    <div class = "paragraph">
        <p><strong>Strong passwords have in them:</strong>
        <ul>
            <li>at least 1 number between 0-9</li>
            <li>at least 1 uppercase character</li>
            <li>at least 1 symbol</li>
            <li>and are longer than 7 characters</li>
            <li>they should also be used on as many of the internet accounts you create as possible.</li>
            <li>They should be unique for each account</li>
            <li>Not contain words spelled the exact same as they would be in a dictionary</li>
        </ul>
        <strong>Why it's important:</strong> The importance of strong passwords cannot be understated. Many tactics that hackers use are based on <br />
        how people come up with passwords. If a hacker guesses one password, they'll often try it out on any other accounts they know <br />
        you have. If they crack your email, they could use it to set up new passwords for other accounts, just by searching through your <br />
        emails. Each additional character will make the password to be exponentially longer to crack, so the longer they are, the better. <br />
        If the password follows the rules listed above, it will be much harder for someone to crack.<br /><br />

        <strong>Important Links:</strong> Go here to check your password strength: <a href = "https://howsecureismypassword.net/"> How Secure is my Password</a> 
         ("If you attended the CCS Roadshow this was the same program they used to evaluate password strength)<br /> 
        Go here to generate a random password: <a href = "https://passwordsgenerator.net/">Password Generator</a> 

</p>
    </div>
    <div class = "video">
    <body>
            <object data="http://www.youtube.com/embed/yzGzB-yYKcc"
            width="560" height="315"></object>
    </body>
    </div>

    <div class = "title"><h1>Password Managers</h1> </div>
    <div class = "paragraph">
    <p>Password Managers: Password managers are used to manage all of the passwords you have, 
        so that they can be as unique, and long as you want <br />
        Information from: <a href = "https://www.alphr.com/features/371158/top-ten-password-cracking-techniques">Password Cracking Techniques</a>
    </p>
    
    
    </div>
  </Layout>
    )
}
export default password