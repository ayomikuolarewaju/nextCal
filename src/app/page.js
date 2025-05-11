"use client"
import { useState } from "react";


const numberFaces = [
  {num:1},{num:2}, {num:3}, {num:4}, {num:5}, {num:6},
  {num:7}, {num:8}, {num:9}, {num:0}, {num:"*"},
  {num:"/"}, {num:"C"}, {num:"+"}, {num:"-"},{num:"="},{num:"."},
]

export default function Home() {

  const [no,setNo] = useState([])

  const handleClick = (item) => {
    setNo((prev) => { 
      if(item === "C"){
        return []
      }else if(item === "="){
        try {
          return [eval(no.join(""))]
        } catch (error) {
          return []
        }
      }else if(item === 0.){
        return [...prev, item.slice(0, -1)]
      }else{
        return [...prev, item]
      }
    })}
    
  

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-8">
      <main className="flex flex-col mt-[20px] items-center justify-center w-[600px] bg-amber-400 h-[700px] rounded-[20px] p-8">
       <div className="w-[400px] bg-white h-[70px] text-center rounded-md items-center justify-center text-black text-[30px] font-bold flex flex-col">
        <h5>{no}</h5>
       </div>
       <div className="grid grid-cols-4 gap-4 w-[400px]">
        {
          numberFaces.map((item, index) => {
            return (
              <div key={index} >
                <div className="text-black cursor-pointer w-[70px] h-[60px] bg-gray-400 mt-5 rounded-md flex items-center justify-center text-2xl font-bold hover:bg-gray-500 transition-all duration-300">
                  <button onClick={()=>handleClick(item.num)} className="w-full h-full flex items-center justify-center cursor-pointer">
                    {item.num}  
                  </button>
                </div>
              </div>
            )
          })
        }
       </div>
      </main>
      
    </div>
  );
}
