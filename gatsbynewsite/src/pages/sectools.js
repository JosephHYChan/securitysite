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
        <Link to="/emailsec/">Email Security</Link>
    </div>
    <div class = "title"><h1><strong>Security Tools (for online accounts)</strong></h1><br /></div>
    <div class = "paragraph">
        <h2>Two Factor Authentication (2FA)</h2>
        <p><strong>Description:</strong> Two Factor Authentication(2FA) is based on using a secondary factor to log in to a website, either something you have 
            (Debit Card number, your phone number) , or a biological indicator (like thumb print, facial scan, your given GPS location or town area). 
            With two factor authentication, the hacker would also need to have the thing that you have or the biological indicator 
            Many banking insitution has begun to offer 2FA alongside their online services to combat the risk of being hacked or having sensitive personal information
            compromised <br />

            <strong>Why should I use it?:</strong> Using a form two factor authentication can help one significantly in protecting their data with a strong password, 
            as it creates an extra factor that needs to be cracked by the hacker.<br /></p>
    </div>
    <div class = "video">
    <body>
        <p>Examples</p>
        <object data="http://www.youtube.com/embed/AIOUlQeQbNM"
        width="560" height="315"></object>
    </body>
    </div>
    <div class = "title">
        <h1>Examples of Using 2FA</h1>
    </div>
    <div class = "paragraph">
        <h2>2FA on Steam</h2>
        <ol>
            <li>Log into Steam</li>
            <li>Once you've logged in, click on the button in the top left corner that says Steam </li>
            <li>Click on the option that says Settings</li>
            <li>Click the button on the right that says MANAGE STEAM GUARD ACCOUNT SECURITY</li>
            <li>Here it will then give the option to send a unique code to your phone to log in, 
                or to your email address in order to log in. This code would be the second factor 
                you need to log in as well as your password. </li>
        </ol><br /><br />

        <h2>2FA on Google</h2>
        <ol>
            <li>Log into your Google Account</li>
            <li>Once you've logged in, click on the button in the top left corner that says Steam </li>
            <li>Click on the button with 9 squares on it in the top right of the screen.</li>
            <li>Then click on the button which will appear that says Account.</li>
            <li>On the left-side, under a section called Sign in and Security, click on ìSigning into Google. </li>
            <li>In the bottom-right corner, under a section called Password sign-in and method,
                click on 2-Step Verification. </li>
            <li>Click on the button that says Get started</li>
            <li>You may need to log in again</li>
            <li>After logging in again, the option it gives for 2 factor authentication is to send a login 			
                code to your phone.If your phone is not there, you will need to add it to your Google Account, 
                using the instructions they give you.</li>
            <li>Click on Try it now.</li>
            <li>Open up your phone, and press yes on the dialogue it sends you.</li>
        </ol><br /><br />

        <h2>2FA on Facebook</h2>
        <ol>
            <li>At the top right of the screen, there is a series of buttons. Click on the arrow button next to the right of question mark button.</li>
            <li>Click on the settings button, which is above the log out button. </li>
            <li>Click on the Security and Login option on the left side of the screen.</li>
            <li>Under the two-factor authentication section, click on the button which says Edit on the right side of the Use Two Factor Authenticationî option.</li>
            <li>Click on the button that says Get Started.</li>
            <li>Select the by text option, or the Authentication app option, and press Next. </li>
            <li>Enter the code they send you (from the Authentication app or your phone) into your computer screen.</li>
        </ol> <br /><br />

        <h2>2FA on Instagram</h2>
        <ol>
            <li>Click the account button (the button most on the right at the top of the screen).</li>
            <li>Click on the settings button (has a cog picture as an icon).</li>
            <li>Click on Privacy and Security.</li>
            <li>Click on the link that says Enable Two Factor Authentication.</li>
            <li>Click on the box that says Require security code.</li>
            <li>Click the button that says Turn it on. </li>
            <li>Enter your phone number and click next.</li>
            <li>Enter the code that Instagram sends your phone, and click Done</li>
        </ol><br /><br />

        <h2>Importance of Anti-Virus Software</h2>
        Description: Anti-virus software works like the bouncer of your computer, if your computer were a nightclub. 
        If it does not like a software program, it will not let in, and if it finds that program has gotten in somehow, 
        it will alert you of its existence and offer you options on how to deal with this threat. <br />

        <strong>Examples:</strong> Avast, Microsoft Security Essentials, Windows Defender. Windows defender comes with all versions of 
        Windows, and can be found by simply searching for it in the search bar in the start menu. <br />

        You can download Microsoft Security Essentials <a href = "https://www.microsoft.com/en-ca/download/details.aspx?id=5201">Here</a>, 
        just click on the button that says download.<br /><br />

        And you can download Avast <a href = "https://www.avast.com/en-ca/free-antivirus-download">Here</a>, 
        just click on the button that says free download. <br /><br />

        <strong>How to find Windows Defender on your computer (Windows 10): </strong>
        <ol>
            <li>Press the start menu o the windows button on your computer.</li>
            <li>Search for ìWindows Defender</li>
            <li>Windows Defender Security Center should come up. </li>
            <li>To check the health of your computer, click on ìHealth report.</li>
        </ol>
    </div>
    <div class ="video">
  <body>
        <strong>Why is this important?</strong><br />
        <object data="http://www.youtube.com/embed/gmALK-RsXJ8"
        width="560" height="315"></object>
    </body>
    </div>
  </Layout>
    )
}
export default emailsec