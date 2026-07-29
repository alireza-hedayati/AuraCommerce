import Image from "next/image"
import ShowButton from "./ShowButton"
function Category() {
  return (
    <div className="mt-4 w-full">
    <h3 className="text-2xl font-bold px-1">Shop By Category</h3>
    <div className="flex flex-wrap items-start justify-between mt-4 md:mx-2">
        
        <div className="category-box">
            <div className="rounded-lg overflow-hidden">
                    <Image className="category-img" src="/images/beauty.jpeg" width={240} height={200} alt="beauty-img"/>
            </div>
        <div className="category-detail-box ">
             <p className="category-name">Beauty</p>
            <ShowButton/>
        </div>
        </div>

        <div className="category-box">
            <div className="overflow-hidden rounded-lg">
                 <Image className="category-img" src="/images/fragrance.jpeg" width={240} height={200} alt="beauty-img"/>
            </div>
        <div className="category-detail-box ">
            <p className="category-name">Fragrance</p>
            <ShowButton/>
        </div>
        </div>

        <div className="category-box">
        <div className="overflow-hidden rounded-lg">
            <Image className="category-img" src="/images/groceries.jpeg" width={240} height={200} alt="beauty-img"/>
        </div>
        <div className="category-detail-box ">
            <p className="category-name">Groceries</p>
            <ShowButton/>
        </div>
        </div>

        <div className="category-box">
            <div className="rounded-lg overflow-hidden">
                <Image className="category-img" src="/images/furniture.jpeg" width={240} height={200} alt="beauty-img"/>
            </div>
        <div className="category-detail-box flex items-center justify-between mt-2">
            <p className="category-name">Furniture</p>
            <ShowButton/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Category