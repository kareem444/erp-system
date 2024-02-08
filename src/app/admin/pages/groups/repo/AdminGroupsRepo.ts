import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { EndPointsConstants } from "src/common/constants/EndPointsConstants";
import AxiosHelper from "src/common/helper/AxiosHelper";

const ItemGroup = EndPointsConstants.ItemGroup;

export class AdminGroupsRepo {
    static getGroups = async () => await AxiosHelper.get(ItemGroup);

    static getGroup = async (id: number) => await AxiosHelper.get(`${ItemGroup}/${id}`);

    static createGroup = async (data: IAdminGroupModel) => await AxiosHelper.post(ItemGroup, data);

    static updateGroup = async (data: IAdminGroupModel) => await AxiosHelper.put(`${ItemGroup}/${data.id}`, data);

    static deleteGroup = async (id: number) => await AxiosHelper.delete(`${ItemGroup}/${id}`);
}
