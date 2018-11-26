
import React from "react"
import { Link } from "gatsby"
import { RadioGroup, RadioButton } from 'react-radio-buttons'


import Layout from '../components/layout';
function quiz () {
  return(
<Layout>
<div class="topnav">
                    <Link to="/#home/">Home</Link>
                        <Link to="/updatesoft/">Updating Software</Link>
                        <Link to="/password/">Passwords</Link>
                        <Link to="/emailsec/">Email Security</Link>
                        <Link to="/sectools/">Security Tools</Link>
                        <a href="#about">About</a>
                    </div>
  <div class = "quiz">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnFqRHydXmB7hcjEYIpkyAa89dZZAAo_9wqlBgD-xGd3-N9Q/viewform?embedded=true" 
  width="800" height="1200" frameborder="0" marginheight="100" marginwidth="100">Loading...</iframe>
</div>
</Layout>
  )
  }
  export default quiz