import { AlertType } from "../modules/alerts/alerts";
import { IAlertReturn } from "../api/alerts";

import * as alerts from "../api/alerts";

export const REQUEST_ALL = "REQUEST_ALL";
export const COMPLETED_ALL = "COMPLETED";
export const FAIL_ALL = "FAIL";

export const REQUEST_SINGLE = "REQUEST_SINGLE";
export const COMPLETED_SINGLE = "COMPLETED_SINGLE";
export const FAIL_SINGLE = "FAIL_SINGLE";

export type RequestAll = {
  type: typeof REQUEST_ALL;
};

export type CompletedAll = {
  type: typeof COMPLETED_ALL;
  payload: IAlertReturn[];
};

export type FailAll = {
  type: typeof FAIL_ALL;
};

export type RequestSingle = {
  type: typeof REQUEST_SINGLE;
};

export type CompletedSingle = {
  type: typeof COMPLETED_SINGLE;
  payload: IAlertReturn;
};

export type FailSingle = {
  type: typeof FAIL_SINGLE;
};

export const allActions = {
  getAlerts: (dispatch: React.Dispatch<ActionTypes>) => {
    return async () => {
      try {
        dispatch({ type: REQUEST_ALL });

        const data = await alerts.get();
        dispatch({ type: COMPLETED_ALL, payload: data });
      } catch {
        dispatch({ type: FAIL_ALL });
      }
    };
  },
  getOneAlert: (dispatch: React.Dispatch<ActionTypes>) => {
    return async (id: string) => {
      try {
        dispatch({ type: REQUEST_SINGLE });

        const data = await alerts.getOne(id);
        dispatch({ type: COMPLETED_SINGLE, payload: data });
      } catch {
        dispatch({ type: FAIL_SINGLE });
      }
    };
  },
  deleteOneAlert: (dispatch: React.Dispatch<ActionTypes>) => {
    return async (id: string) => {
      try {
        dispatch({ type: REQUEST_SINGLE });

        const data = await alerts.remove(id);
        dispatch({ type: COMPLETED_SINGLE, payload: data });
      } catch {
        dispatch({ type: FAIL_SINGLE });
      }
    };
  }
};

export type ActionTypes =
  | RequestAll
  | CompletedAll
  | FailAll
  | RequestSingle
  | CompletedSingle
  | FailSingle;
