import { IAdminUnitInputs } from '../pages/units/interfaces/AdminUnitInterface';

export interface IAdminUnitModel extends IAdminUnitInputs {
  id?: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
