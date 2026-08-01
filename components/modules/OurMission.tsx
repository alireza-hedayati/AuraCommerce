import Crousel from "../utils/Crousel";

function OurMission() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-yellow-400/35 rounded-lg shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl  md:text-2xl lg:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Our mission is to make premium shopping accessible to everyone by combining trusted products,
            transparent pricing, fast delivery, and customer-first support.
          </p>
        </div>

        <div>
          <Crousel />
        </div>
      </div>
    </section>
  );
}

export default OurMission;