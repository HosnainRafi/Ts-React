import React from 'react'
import { Footer } from './common/Footer'
import { Header } from './common/Header'

export const TheLayout = () => {
  return (
    <div>
        <div>
            <Header></Header>
        </div>
        <main>
            body
        </main>
        
        <div>
            <Footer></Footer>
        </div>
    </div>
  )
}
