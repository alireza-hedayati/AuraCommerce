import Image from "next/image"
import Product from "../types/product"

function Card({ title, price , images, rating,  }: Product) {
  return (
    <div className="bg-white rounded-2xl w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-62 shadow-md overflow-hidden flex flex-col justify-center pt-2">
      <div className="relative w-full h-44 lg:h-full rounded-lg bg-gray-100 mx-auto overflow-hidden">
        <Image
          src={images?.[0] ?? ""}
          alt={title}
          width={240}
          height={100}
          className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <p className="text-lg font-semibold text-gray-900">{title}</p>

        <div className="flex items-center justify-between text-sm text-gray-700">
          <span className="font-semibold text-gray-900">${price.toFixed(2)}</span>
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="border-b border-gray-200" />
        <button className="w-full cursor-pointer bg-yellow-500 text-gray-900 font-semibold py-2 rounded-xl hover:bg-yellow-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card