import { IAdminCustomerInputs } from "../pages/customers/interfaces/AdminCustomersInterface"

export interface IAdminCustomerModel extends IAdminCustomerInputs {
    id?: number
    active: boolean
    createdAt?: Date
    updatedAt?: Date
}