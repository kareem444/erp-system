import { IAdminStoreModel } from "src/app/admin/models/AdminStoreModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const Store = EndPointsConstants.Store;

export class AdminStoresRepo {
    static getStores = async () => await AxiosHelper.get(Store);

    static getStore = async (id: number) => await AxiosHelper.get(`${Store}/${id}`);

    static createStore = async (data: IAdminStoreModel) => await AxiosHelper.post(Store, data);

    static updateStore = async (data: IAdminStoreModel) => await AxiosHelper.put(`${Store}/${data.id}`, data);

    static deleteStore = async (id: number) => await AxiosHelper.delete(`${Store}/${id}`);
}
