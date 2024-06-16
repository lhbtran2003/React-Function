
import React,{useState} from 'react'



export const Parent = () => {
    type User = {
        id:number,
        name: string
    }
    const [count, setCount] = useState(0)
    const [name, setName] = useState('bảo trân dưỡng thê')
   

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <p>{name}</p>
      <button onClick={() => setName("cute")}></button>
    </div>
  );
}
