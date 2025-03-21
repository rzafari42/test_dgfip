'use client'

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from 'next/navigation'
import { IProduct } from "@/interfaces/IProduct"
import { getProductById, editProduct, deleteProduct } from "@/services/productsService"
import ProductPresentation from "@/components/productPresentation"
import ProductEdition from "@/components/productEdition"

const Product = () => {
  const params = useParams<{ slug: string }>()
  const router = useRouter()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [ edit, setEdit ] = useState<boolean>(false)
  const productId: number = Number(params.slug.replace('product-', ''))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getProductById(productId)
        setProduct(product)
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [productId])

  const handleSave = async (item : IProduct) => {
    try {
      const res = await editProduct(item)
      setProduct(res)
      setEdit(false)
    }
    catch (error) {
      console.error(error)
    }
  }

  const handleRemove = async () => {
    try {
      await deleteProduct(productId)
      router.refresh()
      router.push('/products-list')
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      {
        !edit ? (
            product && (
              <ProductPresentation 
                product={product} 
                onClickEdit={() => setEdit(true)} 
                onRemoveItem={handleRemove} 
              />
            )
          ) : (
            product && (
              <ProductEdition 
                product={product} 
                onSave={handleSave} 
                onCancel={() => setEdit(false)} 
              />
            )
      )}
    </div>
  )
}

export default Product
