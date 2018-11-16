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
    <div align = "left">
        <h1>Strong Passwords</h1>
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
        If the password follows the rules listed above, it will be much harder for someone to crack.<br />

</p>

        <body>
            <object data="http://www.youtube.com/embed/yzGzB-yYKcc"
            width="560" height="315"></object>
        </body>
    </div>
  </Layout>
    )
}
export default password