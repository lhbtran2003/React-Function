import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const E9 = () => {
  const [gender, setGender] = useState("");

  const handleRadioChange = (e:any) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <h3>Giới tính: {gender && gender}</h3>
      <Form>
        <Form.Check
          type="radio"
          label="Nam"
          onChange={handleRadioChange}
          checked={gender === "nam"}
        />
        <Form.Check
          type="radio"
          label="Nữ"
          onChange={handleRadioChange}
          checked={gender === "nữ"}
        />
        <Form.Check
          type="radio"
          label="Khác"
          onChange={handleRadioChange}
          checked={gender === "other"}
        />
      </Form>
    </div>
  );
};
