import React ,{useState}from 'react'

export const Ex6 = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <p>Bạn đã click {count} lần</p>
        <button onClick={() => setCount(count+1)}>Click để tăng số lần</button>
    </div>
  )
}
