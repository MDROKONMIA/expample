import React from 'react'
import Copyright from './Copyright'
import FooterQuickLinks from './FooterQuickLinks'
import FooterSocialPart from './FooterSocialPart'
import FooterTop from './FooterTop'

export default function Footer (){
  return (
      <footer>
          <FooterTop />
          <FooterSocialPart />
          <FooterQuickLinks />
          <Copyright/>
    </footer>
  )
}
