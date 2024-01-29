import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const customer = EndPointsConstants.Customer;

export class AdminCustomersRepo {
    static getCustomers = async () => await AxiosHelper.get(customer);

    static getCustomer = async (id: string) => await AxiosHelper.get(`${customer}/${id}`);

    static createCustomer = async (data: IAdminCustomerModel) => await AxiosHelper.post(customer, data);

    static updateCustomer = async (id: string, data: IAdminCustomerModel) => await AxiosHelper.put(`${customer}/${id}`, data);

    static deleteCustomer = async (id: string) => await AxiosHelper.delete(`${customer}/${id}`);
}
