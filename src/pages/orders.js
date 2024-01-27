"use client"
import "./global.css";
import React from 'react'
import Layout from "../components/Layout"
import { SessionProvider, useSession } from 'next-auth/react';

const Orders = () => {

  return (
  <SessionProvider>
      <Layout>
        Orders
      </Layout>
  </SessionProvider>

  

  )
}

export default Orders