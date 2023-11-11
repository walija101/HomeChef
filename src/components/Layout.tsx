import Header from './Header'
import Footer from './Footer'
import React from 'react'

type LayoutProps = {
    children : React.ReactNode
}

function Layout({children} : LayoutProps) {
  return (
    <div className='page'>
        <Header/>
        {children}
        <Footer/>
    </div>

  )
}

export default Layout