import React from 'react'
import {Link} from 'react-router-dom'
const CTA = () => {
  return (
   <section className='cta'>
    <p className='cta-text'> Vous avez un projet en tete? <br className='sm:block hidden'/>
    Developont un projet ensemble!

    </p>
    <Link to ='/contact' className='btn'>Me contacter</Link>
   </section>
  )
}

export default CTA