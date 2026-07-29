import { ProductProps } from "../types/product"
import Card from "./Card"

function TrendItems({data}:ProductProps) {
  return (
    <div className="flex flex-wrap justify-center md:justify-evenly gap-4 mt-5">
        {data.slice(0,4).map(product => <Card key={product.id} {...product}/>)}
    </div>
  )
}

export default TrendItems