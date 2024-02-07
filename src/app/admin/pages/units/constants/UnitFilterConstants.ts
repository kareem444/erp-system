import { FilterItem } from 'src/common/components/FilterComponent';
import { UnitInputsConstants } from './UnitInputsConstants';
import { UnitTableConstants } from './UnitTableConstants';

export const UnitFilterConstants: [FilterItem, ...FilterItem[]] = [
  {
    name: UnitTableConstants.unitname,
    value: UnitInputsConstants.unitname,
  },
];
