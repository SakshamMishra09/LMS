"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'


const Layout = ({ children }) => {
    return (
        <>
        
            {children}
            <Footer />
        </>
    )
}

export default Layout;