import React from 'react'
import LoginWithSocial from '../Auth/LoginWithSocial'
import Social from '../Social/Social'
import Swimming from '../Swimming/Swimming'
import AdsBanner from '../Ads/AdsBanner'

const RightAside = () => {
  return (
    <div>
      <LoginWithSocial />
      <Social />
      <Swimming />
      <AdsBanner />
    </div>
  )
}

export default RightAside
