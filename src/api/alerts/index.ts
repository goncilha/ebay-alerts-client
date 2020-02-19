import instance from "../instance";
import { AlertType } from "src/modules/alerts/alerts";

export interface IAlertReturn {
  _id?: string;
  email: string;
  phrase: string;
  peridiocity: number;
  __v?: number;
  error: string;
}

export const save = async (
  data: AlertType,
  id: string | undefined
): Promise<IAlertReturn> => {
  try {
    const method = id ? "patch" : "post";
    const url = id ? `/alerts/${id}` : "/alerts";
    const response = await instance[method](url, data).then(
      result => result.data
    );
    return response;
  } catch (e) {
    return e.data;
  }
};

export const get = async (): Promise<IAlertReturn[]> => {
  try {
    const response = await instance.get("/alerts").then(result => result.data);
    return response;
  } catch (e) {
    return [];
  }
};

export const getOne = async (id: string): Promise<IAlertReturn> => {
  try {
    const response = await instance
      .get(`/alerts/${id}`)
      .then(result => result.data);
    return response;
  } catch (e) {
    return e;
  }
};

export const remove = async (id: string): Promise<IAlertReturn> => {
  try {
    const response = await instance
      .delete(`/alerts/${id}`)
      .then(result => result.data);
    return response;
  } catch (e) {
    return e;
  }
}
