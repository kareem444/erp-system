import { IAdminCurrencyModel } from "src/app/admin/models/AdminCurrencyModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const currency = EndPointsConstants.Currency;

export class AdminCurrencyRepo {
    static getCurrency = async () => await AxiosHelper.get(currency);

    static getOneCurrency = async (id: number) => await AxiosHelper.get(`${currency}/${id}`);

    static createCurrency = async (data: IAdminCurrencyModel) => await AxiosHelper.post(currency, data);

    static updateCurrency = async (data: IAdminCurrencyModel) => await AxiosHelper.put(`${currency}/${data.id}`, data);

    static deleteCurrency = async (id: number) => await AxiosHelper.delete(`${currency}/${id}`);
}
