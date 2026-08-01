import Card from "../modules/Card"
import Pagination from "../modules/Pagination"
import Search from "../modules/Search"
import {Product} from "../types/product"

type Props={
  pageCount:number,
  currentPage:number,
  data:Product[],
}


function Products({data,pageCount,currentPage}:Props) {
  return (
    <div>
      <Search/>
    <div className="flex flex-wrap justify-center md:justify-evenly gap-4 mt-8">
    {data.map((product)=>(<Card key={product.id} {...product}/>))}
    </div>

    <div>
      <Pagination pageCount={pageCount} currentPage={currentPage}/>
    </div>
    </div>
  )
}

export default Products