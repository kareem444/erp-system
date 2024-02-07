import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const supplier = EndPointsConstants.Supplier;

export class AdminSuppliersRepo {
    static getSuppliers = async () => await AxiosHelper.get(supplier);

    static getSupplier = async (id: number) => await AxiosHelper.get(`${supplier}/${id}`);

    static createSupplier = async (data: IAdminSupplierModel) => await AxiosHelper.post(supplier, data);

    static updateSupplier = async (data: IAdminSupplierModel) => await AxiosHelper.put(`${supplier}/${data.id}`, data);

    static deleteSupplier = async (id: number) => await AxiosHelper.delete(`${supplier}/${id}`);
}
