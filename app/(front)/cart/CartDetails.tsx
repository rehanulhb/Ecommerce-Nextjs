'use client'

import useCartService from "@/lib/hooks/useCartStore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function CartDetails(){
    const router = useRouter()
    const{items, itemsPrice, decrease, increase } = useCartService()

    const [mounted,setMounted] = useState(false)
    useEffect(()=> {
        setMounted(true)
    }, [])

    if(!mounted) return <></>

    return 
    <>
        <h1 className="py-4 text-2xl">Shopping Cart</h1>
    </>
    
}