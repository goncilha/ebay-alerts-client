import {
  ActionTypes,
  REQUEST_ALL,
  COMPLETED_ALL,
  REQUEST_SINGLE,
  COMPLETED_SINGLE
} from "./actions";
import { IAlertReturn } from "../api/alerts/";

export const initialState = {
  alerts: {
    data: [],
    status: null
  },
  alert: null
};

export type InitialState = typeof initialState;

type Modify<T, R> = Omit<T, keyof R> & R;

export interface InitialStateType
  extends Modify<
    typeof initialState,
    {
      alerts: {
        data: IAlertReturn[];
        status: "fetching" | "completed" | "error" | null;
      };
      alert: IAlertReturn | null;
    }
  > {}

const reducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case REQUEST_ALL: {
      return {
        ...state,
        alerts: {
          status: "fetching",
          data: []
        }
      };
    }

    case COMPLETED_ALL: {
      return {
        ...state,
        alerts: {
          status: "completed",
          data: action.payload
        }
      };
    }

    case COMPLETED_SINGLE: {
      return {
        ...state,
        alert: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
