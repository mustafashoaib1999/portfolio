import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
      <div>

        <div className="container">
         <main className="hero">
            <div className="hero-content">
                <h1>You Deserve the best</h1>
                <p> Your feet deserve the best, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minima.</p>
                <img src="/images/hero-image.png" alt="" height={300}/>

            <div className="hero-btn">
                <button> Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Also Available on</p>
            </div>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="" />
            </div>

            </div>
        </main>
        </div>

      </div>
    )
  }
}
