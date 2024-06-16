import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const Ex8 = () => {
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e:any) => {
    const inputValue = e.target.value;
    // Count characters including spaces
    const count = inputValue.length;
    setCharCount(count);
  };

  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          placeholder="Nhập văn bản"
          onChange={handleInputChange}
        />
        <p>Số kí tự: {charCount}</p>
      </Form>
    </div>
  );
};
