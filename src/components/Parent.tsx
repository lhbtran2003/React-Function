import React, { useState } from 'react'

export const Parent = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("true")

  //useEffect : là hook can thiệp vào vòng đời của component
  return (
    <div>
      <form style={{display:'grid'}}>
        <input type="text" placeholder='nhập tên' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='nhập số tuổi' value={age} onChange={(e) => setAge(e.target.value)}/>
        <select value={gender} onChange={(e) => setAge(e.target.value)} >
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
      </form>
    </div>
  )
}
