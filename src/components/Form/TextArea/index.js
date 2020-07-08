import React, { useEffect, useRef, Fragment } from "react";
import { useField } from "@unform/core";
import { TextArea, ErrorMessage } from "./style";

export default function UnformTextArea({ name, ...rest }) {
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
      <TextArea ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Fragment>
  );
}
