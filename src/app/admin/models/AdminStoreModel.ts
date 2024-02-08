import { IAdminStoreInputs } from "../pages/stores/interfaces/AdminStoresInterface";

export interface IAdminStoreModel extends IAdminStoreInputs {
    id: number,
    active: boolean,
}