import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const customer = EndPointsConstants.Customer;

export class AdminCustomersRepo {
    static getCustomers = async () => await AxiosHelper.get(customer);

    static getCustomer = async (id: number) => await AxiosHelper.get(`${customer}/${id}`);

    static createCustomer = async (data: IAdminCustomerModel) => await AxiosHelper.post(customer, data);

    static updateCustomer = async (data: IAdminCustomerModel) => await AxiosHelper.put(`${customer}/${data.id}`, data);

    static deleteCustomer = async (id: number) => await AxiosHelper.delete(`${customer}/${id}`);
}
