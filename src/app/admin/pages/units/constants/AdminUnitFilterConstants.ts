import { FilterItem } from 'src/common/components/FilterComponent';
import { UnitInputsConstants } from './AdminUnitInputsConstants';
import { UnitTableConstants } from './AdminUnitTableConstants';

export const UnitFilterConstants: [FilterItem, ...FilterItem[]] = [
  {
    name: UnitTableConstants.unitname,
    value: UnitInputsConstants.unitname,
  },
];
