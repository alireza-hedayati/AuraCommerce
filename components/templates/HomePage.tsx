import Brands from '../modules/Brands'
import Category from '../modules/Category'
import HeroSec from '../modules/HeroSec'
import TrendItems from '../modules/TrendItems'
import Product from '../types/product'
import { ProductProps } from '../types/product'


function HomePage({data}:ProductProps) {
  return (
    <>
    <HeroSec/>
    <Category/>
    <Brands/>
    <TrendItems data={data}/>
    </>
  )
}

export default HomePage