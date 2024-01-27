import Layout from "@/components/Layout";
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductForm({
    _id,
    title : existingTitle,
    description : existingDescription,
    price : existingPrice,
    formTitle : formTitle
})

{
    const [title,setTitle]= useState(existingTitle || '')
    const [description,setDescription] = useState(existingDescription||'')
    const [price,setPrice] = useState(existingPrice||'')

    const router = useRouter();
  
    const saveProduct = async (e)=>
    {
      const data = {title,description,price};
      e.preventDefault();
      if(_id)
      {
        //update
        await axios.put("/api/products",{...data,_id})
        console.log("Data Updated")
      }
      else
      {
        // create 
        await axios.post("/api/products",data);
        console.log("Data Posted");
      }
      router.push("/products")

    }

    return(

        <form onSubmit={saveProduct}>
        <h1>
            {formTitle}
        </h1>
        <label>Product Name</label>
        <input type="text" 
            placeholder='Enter Product Name' 
            value={title} 
            onChange={ev=>setTitle(ev.target.value)}>
        </input>

        <label>Product Description</label>
        <textarea 
            placeholder="Enter Product Description"
            value={description}
            onChange={ev=>setDescription(ev.target.value)}>
        </textarea>

        <label>Product Price</label>
        <input type="number" 
            placeholder='Enter Product Price' 
            value={price} 
            onChange={ev=>setPrice(ev.target.value)}>
        </input>

        <button type='submit' className="btn-primary">Save</button>
    </form>


    )
}