'use client'
import { useState } from "react";

function Page(){
  const [count,setCount ] = useState(10);

  const setContent = ()=>{
    setCount(200)
  }
  console.log(count)

  return <>hello
  <button onClick={setContent}>点我设置为200</button>
  <Hello />
  </>
}
function Hello(){
  const [count,setCount ] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  return <div>
    <div>{count}</div>
    <button onClick={handleIncrement}>点我啊啊啊</button>
  </div>
}
export default Page;