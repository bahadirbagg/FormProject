import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormDetailCardView({ data }) {
  const [input, setInput] = useState("");
  return (
    <Form className="container">
      <Form.Group className="mb-3">
        <Form.Label>{data.name}</Form.Label>
        <Form.Control
          onChange={(e) => {
            setInput(e.target.value);
          }}
          autoComplete="off"
          type={data.dataType}
          placeholder={`Please enter ${data.name}.`}
          value={input}
          required={data.required}
        />
      </Form.Group>
      {input === "" && data.required === true ? (
        <Alert variant="danger">Please enter {data.name}.</Alert>
      ) : null}
    </Form>
  );
}

export default FormDetailCardView;
