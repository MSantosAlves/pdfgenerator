import React, { useEffect, useRef, Fragment } from "react";
import { useField } from "@unform/core";
import { InputText, ErrorMessage } from "./style";

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return (
    <Fragment>
      <InputText ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Fragment>
  );
}
