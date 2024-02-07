import { IAdminCustomerModel } from 'src/app/admin/models/AdminCustomerModel';
import { EndPointsConstants } from 'src/common/constants/EndPointsConstants';
import AxiosHelper from 'src/common/helper/AxiosHelper';

const unit = EndPointsConstants.Unit;

export class AdminUnitsRepo {
  static getUnits = async () => await AxiosHelper.get(unit);

  static getUnit = async (id: number) => await AxiosHelper.get(`${unit}/${id}`);

  static createUnit = async (data: IAdminCustomerModel) => await AxiosHelper.post(unit, data);

  static updateUnit = async (data: IAdminCustomerModel) =>
    await AxiosHelper.put(`${unit}/${data.id}`, data);

  static deleteUnit = async (id: number) => await AxiosHelper.delete(`${unit}/${id}`);
}
