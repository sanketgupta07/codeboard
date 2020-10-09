import React from "react";
import { Button, Form } from "react-bootstrap";
import { Input, Label } from "reactstrap";

export default function InputForm(params) {
  return (
    <>
      <Form>
        <Label htmlFor="my-input">Git Organization</Label>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <Button>Get Organization</Button>
      </Form>
    </>
  );
}
