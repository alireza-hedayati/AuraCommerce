import Image from "next/image"
function Brands() {
  return (
    <div className="mt-6 mx-1">
    <h3 className="text-xl font-bold">Trusted By Leading Brands</h3>
    <div className="bg-hero flex items-center justify-between mt-4 rounded-lg">
        <Image src="/images/ember1.png" width={120} height={100} alt="ember image"/>
        <Image src="/images/KIN1.png" width={120} height={100} alt="kin image"/>
        <Image src="/images/Solace1.png" width={120} height={100} alt="solace image"/>
        <Image src="/images/aura1.png" width={120} height={100} alt="Aura_Basic image"/>
    </div>
    </div>
  )
}

export default Brands