import React, { Suspense } from 'react'
import AllCategoris from '../AllCategoris/AllCategoris'
import Loader from '../IsLoader/Loader'

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <AllCategoris />
      </Suspense>
    </div>
  )
}

export default LeftAside
