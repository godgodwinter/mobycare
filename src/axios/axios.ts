/* eslint-disable */
// Api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiRequestConfig extends AxiosRequestConfig {
    // Define any custom configurations specific to your application
}

interface ApiResponse<T = any> extends AxiosResponse<T> { }

const BASE_URL: string = import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : "http://localhost:8000/";

const axiosAPI = axios.create({
    baseURL: `${BASE_URL}api/`,
});

const apiRequest = <T>(
    method: AxiosRequestConfig["method"],
    url: string,
    request?: any
): Promise<T> => {
    const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const config: ApiRequestConfig = {
        method,
        url,
        data: request,
        headers,
    };

    return axiosAPI(config)
        .then((res: ApiResponse<T>) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err));
};

const apiRequestDown = <T>(
    method: AxiosRequestConfig["method"],
    url: string,
    request?: any
): Promise<T> => {
    const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        responseType: "blob",
    };

    const config: ApiRequestConfig = {
        method,
        url,
        data: request,
        headers,
    };

    return axiosAPI(config)
        .then((res: ApiResponse<T>) => Promise.resolve(res.data))
        .catch((err) => Promise.reject(err));
};

const get = <T>(url: string, request?: any): Promise<T> =>
    apiRequest<T>("get", url, request);

const deleteRequest = <T>(url: string, request?: any): Promise<T> =>
    apiRequest<T>("delete", url, request);

const post = <T>(url: string, request?: any): Promise<T> =>
    apiRequest<T>("post", url, request);

const postDown = <T>(url: string, request?: any): Promise<T> =>
    apiRequestDown<T>("post", url, request);

const put = <T>(url: string, request?: any): Promise<T> =>
    apiRequest<T>("put", url, request);

const patch = <T>(url: string, request?: any): Promise<T> =>
    apiRequest<T>("patch", url, request);

const API = {
    get,
    delete: deleteRequest,
    post,
    postDown,
    put,
    patch,
};

export default API;
