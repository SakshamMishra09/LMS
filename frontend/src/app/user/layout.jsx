import Footer from '@/components/Footer';
import Navbar from './Navbar';
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Layout;