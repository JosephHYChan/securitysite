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
        <h1>What do you mean Strong Password? Mine's strong enough! I remember it, that's all I need!</h1></div>
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
        <strong>Why it's important:</strong> The importance of strong passwords cannot be understated. Many tactics that hackers use are based on 
        how people come up with passwords. If a hacker guesses one password, they'll often try it out on any other accounts they know 
        you have. If they crack your email, they could use it to set up new passwords for other accounts, just by searching through your 
        emails. Each additional character will make the password to be exponentially longer to crack, so the longer they are, the better. 
        If the password follows the rules listed above, it will be much harder for someone to crack.<br /><br />

        <strong>Important Links:</strong> Go here to check your password strength: <a href = "https://howsecureismypassword.net/"> How Secure is my Password</a> 
         ("If you attended the CCS Roadshow this was the same program they used to evaluate password strength)<br /> 
        Go here to generate a random password: <a href = "https://passwordsgenerator.net/">Password Generator</a> <br />

</p>
    <iframe width="500" height="315" src="https://www.youtube.com/embed/xHSnHj-zKF4" frameborder="0" allow="accelerometer; autoplay; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
    </div>
    <div class = "video">
    <body>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yzGzB-yYKcc" frameborder="0" allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </body>
    </div>

    <div class = "title"><h1>Password Managers</h1> </div>
    <div class = "paragraph">
    <p>Password Managers: Password managers are used to manage all of the passwords you have, 
        so that they can be as unique, and long as you want <br />

        <strong>Why should I use one?:</strong> By using a password manager, your passwords can be as complex as 
        you want and you will not need to remember them. They also save time! A password manager 
        could free up entire hours of your time! A good example of one is called “Last Pass”. 
        Password managers are also safe because they encrypt your passwords, so that if hacked, 
        a hacker will not understand what your passwords are for. Password Managers only require 
        you to know one password, so that you can log in to your password manager. 
        
        <strong>How to install one on Chrome</strong><br />
        <ol>
            <li>Click on the Apps button in the left corner</li>
            <li>Press the button that says "Web store" </li>
            <li>Look for the search bar on the left side of the page</li>
            <li>Enter into the search bar, "lastPass"</li>
            <li>Click on the first result, it should say “LastPass Password Manager”</li>
            <li>Click on the install button </li>
        </ol><br /><br />

         <strong>How to install one on Microsoft Edge</strong><br />
        <ol>
            <li>Click on the Settings button, it has three dots and is in the right corner of the screen.</li>
            <li>Inside of the settings list, there is an extension button, click on that button. </li>
            <li>Click on the link that says “Explore more extensions”</li>
            <li>Enter into the searchbar at the top, “lastPass”.</li>
            <li>Click on the on the first result, which should say “LastPass Password Manager”</li>
            <li>Click on the Get button</li>
        </ol><br /><br />
        <strong>How to install one on Firefox</strong><br />
        <ol>
            <li>Click on the settings button, it has three lines and is in the right corner of the screen.</li>
            <li>Click on the add-ons button.</li>
            <li>Click on the “Find More add-ons” button. This will create a new tab.</li>
            <li>In the newly made tab, look for the search bar at the right corner, and enter “lastPass”.</li>
            <li>Click on the first result, it should say “LastPass Password Manager”</li>
            <li>Click on the “Add to Firefox” button.</li>
        </ol><br /><br />

        <strong>What if I still don't want to use one?:</strong> A good enough substitute to using a password manager would be 
        writing your passwords out on a piece of paper that you keep somewhere else, or keeping them inside of 
        a word document on your computer. Doing either of these will allow you to write secure passwords without 
        having to remember what they are. In general, keep them encrypted, keep them safe. <br /><br />

        Information from: <a href = "https://www.alphr.com/features/371158/top-ten-password-cracking-techniques">Password Cracking Techniques</a>
    </p>
    
    </div>
  </Layout>
    )
}
export default password