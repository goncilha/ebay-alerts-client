import React from "react";
import { StoreProviderContext } from "../../../../store/store";
import styled from "styled-components";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

const AlertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DeleteButton = styled(Button)`
  color: white;
  background-color: red;
`;

const List = () => {
  const { state, actions } = React.useContext(StoreProviderContext);

  React.useEffect(() => {
    actions.getAlerts();
  }, []);

  const alerts = React.useMemo(() => {
    return state.alerts.data;
  }, [state.alerts]);

  return (
    <AlertContainer>
      {alerts.map(alert => (
        <Card key={alert._id}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {alert.email}
            </Typography>
            <Typography variant="h5" component="h2">
              {alert.phrase}
            </Typography>
            <Typography color="textSecondary">
              {alert.peridiocity} min
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`/alerts/${alert._id}`}>View</Link>
            </Button>
            <DeleteButton onClick={() => actions.deleteOneAlert(alert._id)} size="small">Delete</DeleteButton>
          </CardActions>
        </Card>
      ))}
    </AlertContainer>
  );
};

export default List;
