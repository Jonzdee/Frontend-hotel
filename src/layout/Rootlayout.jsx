import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AppointmentForm from '../components/appointment-form/AppointmentForm'

const Rootlayout = () => {
    return (
        <>
            <AppointmentForm />
            <Navbar />
            <section className='mt-[80px]'>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}

export default Rootlayout