/* eslint-disable @next/next/no-img-element */
import React from 'react';
import servicesData from '../../data/sections/services2.json';

const Services2 = () => {
  return (
    <section className="services section-padding bord-top">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6>Companies & Brands</h6>
          <h3>Our Companies</h3>
        </div>
        <div className="row">
  {
    servicesData.map((service, index) => (
      <div className="col-lg-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 0.3}s`} key={service.id}>
        <div className={`item simpl ${index !== servicesData.length - 1 ? 'md-mb50' : ''}`}>
          <span className={`icon ${service.icon}`}></span>
          <h6>{service.title}</h6>
          <p>{service.content}</p>
          <div className='img'>
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </div>
    ))
  }
</div>

      </div>
    </section>
  )
}

export default Services2