
import Layout from "@/components/Layout";
import { SessionProvider, useSession } from 'next-auth/react';
import "../../global.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

export default function EditProductPage() {
    
    const [productInfo,setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;

    const [title,setTitle]= useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")

    useEffect(()=>{
        if(!id)
        {
            return;
        }
        axios.get('/api/products?id='+id)
            .then(response=>setProductInfo(response.data))
    },[id])

    return (
        <SessionProvider>
            <Layout>
                <ProductForm {...productInfo} formTitle={'Edit a Product'}/>
            </Layout>
        </SessionProvider>

    )
}