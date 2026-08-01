import Image from "next/image";

function HeroSec() {
  return (
    <div className="h-66 bg-hero bg-cover bg-center flex flex-col md:flex-row items-center md:items-stretch justify-between rounded-2xl px-4 py-8 gap-6">
      <div className="flex flex-col w-full md:w-3/6 h-auto md:h-9/10 justify-center mx-0 md:mx-4">
            <h2 className="text-3xl font-bold text-black">Scale Your Direct-to-Consumer Brand with Aura.</h2>
            <p className="text-black">The all-in-one platform powering growth for modern brands. Sell smarter, scale faster.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-3 w-full sm:w-auto">
                <button className="bg-yellow-500 text-gray-100 font-bold px-4 py-2 rounded-xl hover:bg-yellow-600 cursor-pointer">Explore Features</button>
                <button className="bg-yellow-500 text-gray-100 font-bold px-4 py-2 rounded-xl hover:bg-yellow-600 cursor-pointer">Request Demo</button>
            </div>
        </div>
      <div className="relative w-full md:w-2/6 h-56 sm:h-72 md:block md:h-full mx-0 md:mx-2 sm:hidden">
        <Image className="object-cover rounded-2xl" src="/images/hero-img.png" alt="Hero Image" fill priority />
        </div>
    </div>
  )
}

export default HeroSec