import React from 'react'
import './info.css'
import email from '../img/email.png'
import phone from '../img/phone.png'
import address from '../img/google-maps.png'
import skype from '../img/skype.png'
import telegram from '../img/telegram.png'
import ContactWay from './ContactWay'
import map from '../img/map.png'

function Info() {



  return (
    <>
      <div className='info_container'>
        <h2>Ways to contact us :</h2>

        <ul>
          <ContactWay
            text='email :'
            img={email}
            recipient='fakeInc@gmail.com'
            href='mailto: fakeInc@gmail.com'
          />
          <ContactWay
            text='phone :'
            img={phone}
            recipient='+7-10-1-212-123 45 67'
            href='tel:+7-10-1-212-123 45 67'
          />
          <ContactWay
            text='telegram :'
            img={telegram}
            recipient='@hil_larry'
            href='tg://resolve?domain=hil_larry'
          />
          <ContactWay
            text='skype :'
            img={skype}
            recipient='fakeInSkype7'
            href='skype:fakeInSkype7'
          />
          <ContactWay
            text='address :'
            img={address}
            recipient='Stanford, CA 94305, USA'
            href='https://goo.gl/maps/CAmTWaSA4m91nGQJA'
          />
        </ul>

        <div className='find_us'>Find us</div>

      </div>
      <div className='map_wrapper'>
        <img src={map} alt="map" />
      </div>
    </>
  )
}

export default Info
