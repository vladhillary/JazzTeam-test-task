import React from 'react'
import List from './List'

function AboutUs() {

    const services = ['We help the company to earn more money', 'We are developing the infrastructure', 'Investing in startups']

    const companies = ['Google', 'Facebook', 'Microsoft', 'Nvidia', 'IBM', 'Apple', 'Adobe', 'Intel', 'eBay', 'Samsung']


    return (
        <div className='about_wrapper'>
            <h1 className='welcome_company'>Welcome to the Fake Inc.</h1>

            <List 
            h4Text='Our services:'
            services={services}
            nameClass='services'
            />
            <List 
            h4Text='We cooperate with such companies as:'
            services={companies}
            nameClass='list_company'
            />
           
            <h3>We will be glad to cooperate!</h3>
        </div>
    )
}

export default AboutUs
