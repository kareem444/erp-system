import { IAdminCurrencyInputs } from "../pages/currency/interfaces/AdminCurrencyInterface"

export interface IAdminCurrencyModel extends IAdminCurrencyInputs {
    id?: number
    active: boolean
}