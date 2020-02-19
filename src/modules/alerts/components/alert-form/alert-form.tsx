import React from "react";
import { Form, Field, useFormikContext } from "formik";
import { FormControl, MenuItem, Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import CustomSelect from "src/components/custom-select";
import { useParams } from "react-router-dom";
import { StoreProviderContext } from "src/store/store";

const useCurrentAlert = () => {
  const { actions, state } = React.useContext(StoreProviderContext);

  const { id } = useParams();

  const { setValues } = useFormikContext();

  const currentAlert = React.useMemo(() => {
    const alert =
      state.alerts.data.find(alert => alert._id === id) || state.alert;
    if (alert) {
      return alert;
    } else {
      return null;
    }
  }, [state.alerts.data, state.alert]);

  React.useEffect(() => {
    if (currentAlert) {
      setValues(currentAlert);
    } else {
      if (id) {
        actions.getOneAlert(id);
      }
    }
  }, [currentAlert, setValues, id]);
};

const AlertForm = () => {
  useCurrentAlert();

  return (
    <FormControl>
      <Form>
        <Field name="email" placeholder="Email" component={TextField} />
        <Field name="phrase" placeholder="Frase" component={TextField} />
        <Field
          name="peridiocity"
          placeholder="Periodicidade"
          component={CustomSelect}
        >
          <MenuItem value={2}>2 min</MenuItem>
          <MenuItem value={10}>10 min</MenuItem>
          <MenuItem value={30}>30 min</MenuItem>
        </Field>
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Form>
    </FormControl>
  );
};

export default AlertForm;
