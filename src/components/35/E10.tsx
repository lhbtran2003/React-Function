import React, { SetStateAction, useState } from "react";
import { Form, FormLabel, FormControl, FormCheck } from "react-bootstrap";

export const E10 = () => {
  const [hobbies, setHobbies] = useState([]);

  const handleAddHobby = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, name as never]);
    } else {
      setHobbies((prevHobbies) => prevHobbies.filter((hobby) => hobby !== name));
    }
  };

  return (
    <div>
      <h1>Sở thích: {hobbies.join(", ")}</h1>
      <Form>
        <FormLabel>Chọn sở thích:</FormLabel>
        <FormControl>
          <FormCheck type="checkbox" name="Đi chơi" label="Đi chơi" onChange={handleAddHobby} />
          <FormCheck type="checkbox" name="Đi quẩy" label="Đi quẩy" onChange={handleAddHobby} />
          <FormCheck type="checkbox" name="Đi nhậu" label="Đi nhậu" onChange={handleAddHobby} />
          <FormCheck type="checkbox" name="Đi ăn" label="Đi ăn" onChange={handleAddHobby} />
        </FormControl>
      </Form>
    </div>
  );
};
