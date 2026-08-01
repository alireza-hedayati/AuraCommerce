export const dynamic= "force-dynamic"

import Products from "@/components/templates/Products"
import api from "@/components/services/api"
import {Product ,SearchParams } from "@/components/types/product"


export default async function ProductsPage({searchParams}:{searchParams:SearchParams}) {
  const{q} = await searchParams;
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit=10;
  const skip = (page-1)*limit;
  const endpoint = q ? `/products/search?q=${q}`:`/products?limit=${limit}&skip=${skip}`

  const {data} = await api.get<{products:Product[],total:number}>(endpoint)
  
  const pageCount = Math.ceil(Number(data.total/limit))
  
  return (
    <>
      <Products data={data.products} pageCount={pageCount} currentPage={page} />
    </>
  )
}

