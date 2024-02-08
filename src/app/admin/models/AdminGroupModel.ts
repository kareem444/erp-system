import { IAdminGroupInputs } from "../pages/groups/interfaces/AdminGroupsInterface"

export interface IAdminGroupModel extends IAdminGroupInputs{
    id?: number
    active: boolean
}