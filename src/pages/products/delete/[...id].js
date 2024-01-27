import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import "../../global.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Delete() {
    
    const router = useRouter();
    const {id} = router.query;

    const [productInfo,setProductInfo] = useState();

    const goBack = ()=>{
        router.push("/products");
    }

    useEffect(()=>{
        if(!id)
        {
            return;
        }
        else
        {
            axios.get("/api/products?id="+id).then(response=>{
                setProductInfo(response.data)
            })
        }
    },[id])

    async function deleteProduct(){
        await axios.delete("/api/products?id="+id);
        goBack();
    } 
    

    return (
        <SessionProvider>
            <Layout>
                <div className="w-[60vw] h-[50vh] bg-blue-900 rounded-lg ml-[15vw] text-white p-3">
                    <h1 className="text-white text-bold text-center text-2xl mt-5">Do you want to Delete Product &nbsp; "{productInfo?.title}"?</h1>
                    <div className="w-[40vw] flex justify-between mt-[15vh] ml-[10vw] px-2">
                        <button className="w-22 h-10 py-2 px-3 rounded border-none bg-green-400" onClick={deleteProduct}>Delete</button>
                        <button className="w-22 h-10 py-2 px-3 rounded border-none bg-red-400" onClick={goBack}>Cancel</button>
                    </div>
                </div>
            </Layout>
        </SessionProvider>
    )
}