"use client"
import "../global.css";
import Layout from "../../components/Layout"
import { SessionProvider, useSession } from 'next-auth/react';
import ProductForm from "@/components/ProductForm";

const Products = () => {

  return ( 
    <SessionProvider>
      <Layout>
        <ProductForm formTitle={'Add a New Product'}/>
      </Layout>
    </SessionProvider>

  

  )
}

export default Products