import Axios from 'axios'
import CookiesHelper from './CookiesHelper'
import { AsyncHelper } from '../DataHandler/helper/ServerDataHandlerHelper'

const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: 'Bearer ' + CookiesHelper.get('access_token')
    }
})

export default class AxiosHelper {
    static async get(url: string, params?: any) {
        return await AsyncHelper.createPromise(
            async () => {
                const res = await axiosInstance.get(url, { params })
                return res.data
            }
        )
    }

    static async post(url: string, data: any, params?: any, isMultipart = false) {
        return await AsyncHelper.createPromise(async () => {
            const newData = await axiosInstance.post(url, data, {
                headers: {
                    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json'
                },
                params
            })
            return newData.data
        })
    }

    static async put(url: string, data: { id: number } & any, params?: any, isMultipart = false) {
        return await AsyncHelper.createPromise(async () => {
            const updatedData = await axiosInstance.put(url, data, {
                headers: {
                    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json'
                },
                params
            })
            return updatedData.data
        })
    }

    static async delete(url: string, params?: any) {
        const deleteData = await AsyncHelper.createPromise(
            async () => await axiosInstance.delete(url, { params })
        )
        return deleteData.data
    }
}
