import Fetchdata from "./components/Fetchdata";
import { type Data } from "./types/data";

export default async function Home() {
  const res = await fetch("http://localhost:8000/",{
    cache: "no-store",
  });
  if(!res.ok) throw new Error("fetch error");
  const data: Data = await res.json();

  return (
    <div>
      <Fetchdata message={data.message}/>
    </div>
  )
}