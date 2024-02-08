import { IAdminSupplierInputs } from "../pages/suppliers/interfaces/AdminSuppliersInterface"

export interface IAdminSupplierModel extends IAdminSupplierInputs{
    id?: number
    active: boolean
    createdAt?: Date
    updatedAt?: Date
}