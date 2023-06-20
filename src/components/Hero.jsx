import React from 'react'
import './styles/hero.css'
import globe from '../images/globe@1x.webp'
import bissel from '../images/bissell.svg'
import airbnb from '../images/airbnb.svg'
import microsoft from '../images/microsoft.svg'
const Hero = () => {

  return (
    <div className='hero-container'>
<div className="hero-txt">
    <p className='hero-first-txt'>How work should work</p>
    <p>Forget the old rules. You can have the best people.
Right now. Right here.</p>
<p>Get Started</p>

<div className="companies-trust">
<img src={microsoft} alt="microsoft" />
<img src={airbnb} alt="airbnb" />
<img src={bissel} alt="bissel" />
</div>

</div>
<div className="hero-img">
    <img src={globe} className='globe' alt="" />
</div>
    </div>
  )
}

export default Hero