import React from "react";
import { Select, SelectProps } from "formik-material-ui";
import { FormControl, FormHelperText } from "@material-ui/core";

const CustomSelect = (props: SelectProps) => {
  const { name } = props.field;
  const { errors } = props.form;
  const error = errors[name];

  return (
    <FormControl>
      <Select {...props} />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
