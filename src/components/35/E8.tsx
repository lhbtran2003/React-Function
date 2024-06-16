import React, {useState} from 'react'

export const E8 = () => {
    const [name, displayName] = useState("")
    const handleSelectChange = (e) => {
        displayName(e.target.value)
    }
  return (
    <div>
      <h3>thanh pho: {name && name !== "default" ? name : ""}</h3>
      <form action="">
        <select id="" onChange={handleSelectChange}>
          <option value="default" selected>
            Chon tp
          </option>
          <option value="hanoi">Ha Noi</option>
          <option value="sapa">Sa Pa</option>
          <option value="hcm">HCM</option>
          <option value="dalat">Da Lat</option>
        </select>
      </form>
    </div>
  );
}
