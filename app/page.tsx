
import HomePage from "@/components/templates/HomePage";
import "./globals.css";
import api from "../components/services/api.js"
import {Product} from "@/components/types/product";


export default async function Home() {
  const {data} = await api.get<{products:Product[]}>("/products")
  console.log(data)
  
  
  return (
    <div>
      <HomePage data={data.products}/>
    </div>
  );
}
