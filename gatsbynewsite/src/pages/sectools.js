import React from "react"
import { Link } from "gatsby";

import Layout from '../components/layout';

function emailsec () {
    return(
    <Layout>
      <div class="topnav">
<<<<<<< HEAD
        <Link to="/#home/">Home</Link>
        <Link to="/updatesoft/">Updating Software</Link>
        <Link to="/password/">Passwords</Link>
        <Link to="/emailsec/">Email Security</Link>
    </div>
    <div align = "left">
=======
                        <Link to="/#home/">Home</Link>
                        <Link to="/updatesoft/">Updating Software</Link>
                        <Link to="/password/">Passwords</Link>
                        <Link to="/emailsec/">Email Security</Link>
                    </div>
    <div class = "paragraph">
>>>>>>> 93c054e31be9dbc341d31f1838dc3f63db17bbfb
        <div align ="center"><h1><strong>Security Tools</strong></h1></div><br />
        <h2>Two Factor Authentication (2FA)</h2>
        <p><strong>Description:</strong> Two Factor Authentication is based on using a secondary factor to log in to a website, either something you have <br />
            (Debit Card number, your phone number) , or a biological indicator (like thumb print, facial scan, your given GPS location or town area). <br />
            With two factor authentication, the hacker would also need to have the thing that you have or the biological indicator <br />

            <strong>Why should I use it?:</strong> Using a form two factor authentication can help one significantly in protecting their data with a strong password, <br />
            as it creates an extra factor that needs to be cracked by the hacker.<br /></p>

        <body>
            <p>Examples</p>
            <object data="http://www.youtube.com/embed/AIOUlQeQbNM"
            width="560" height="315"></object>
        </body>
        <p>Examples: Steam, Google, most online banking systems (through using the debit card as a login credential), Twitter, Facebook.</p><br />
    </div>
  </Layout>
    )
}
export default emailsec