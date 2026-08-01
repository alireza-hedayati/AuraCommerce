import Link from "next/link";

function AboutUsHero() {
  return (
    <section
      className="bg-about-us mt-5 relative w-9/10 mx-auto bg-cover bg-center bg-no-repeat rounded-2xl"
    >
      <div className="absolute inset-0 bg-black/40 rounded-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 sm:py-28 sm:px-8 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">About AuraCommerce</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6">
          We're dedicated to making online shopping simple, reliable, and enjoyable by offering carefully
          selected products, competitive prices, and exceptional customer service.
        </p>

        <Link
          href="/products"
          className="inline-block bg-yellow-500 text-white font-bold px-5 py-3 rounded-md shadow hover:bg-yellow-600 hover:shadow-lg transition-colors"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}

export default AboutUsHero;