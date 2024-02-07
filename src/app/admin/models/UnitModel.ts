import { IUnitInputs } from '../pages/units/interfaces/UnitInterface';

export interface IUnitModel extends IUnitInputs {
  id?: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
