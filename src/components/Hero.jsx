import React from 'react'
import './styles/hero.css'
import globe from '../images/globe@1x.webp'
import bissel from '../images/bissell.svg'
import airbnb from '../images/airbnb.svg'
import microsoft from '../images/microsoft.svg'
import gif from '../images/gif.png'
const Hero = () => {

  return (
    <>
    <div className='hero-container'>
<div className="hero-txt">
    <p className='hero-first-txt'>How work<br/>should work</p>
    <p className='hero-second-txt'>Forget the old rules. You can have the best people.
Right now. Right here.</p>
<p className='call-to-action'>Get Started</p>

<div className="companies-trust">
  <p>Trusted By</p>
  <div className='companies'>
  <img src={microsoft} alt="microsoft" />
<img src={airbnb} alt="airbnb" />
<img src={bissel} alt="bissel" className='bissel' />
  </div>

</div>

</div>
<div className="hero-img">
    <img src={globe} className='globe' alt="" />
</div>





    </div>

    <div className="sign-container">
  <div className="sign-img sign-child">
    <img src={gif} alt="gif" />
  </div>

  <div className="sign-lists sign-child">
<p>Up your work game, it’s free</p>

<ul>
  
  
<li className='sign-master-li'>
No cost to join
<ul>
  <li>Register and browse professionals, explore projects, or even book a consultation.</li>
</ul>
</li>

<li className='sign-master-li' >
Post a job and hire top talent
<ul>
  <li>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</li>
</ul>
</li>



<li className='sign-master-li'>
Work with the best—without breaking the bank
<ul>
  <li>Upwork makes it affordable to up your work and take advantage of low transaction rates.</li>
</ul>
</li>


</ul>
<div className="sign-link">
  <p className='p-1'>Sign Up for free</p>
  <p className='p-2'>Learn how to hire</p>
  </div>
  </div>

</div>
    </>
  )
}

export default Hero