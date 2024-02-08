export const UnitTableConstants = {
  unitname: "Name",
}

type UnitsTableKeys = keyof typeof UnitTableConstants;
type UnitsTableValues = typeof UnitTableConstants[UnitsTableKeys];

export const UnitTableHeaderConstants: UnitsTableValues[] = Object.values(UnitTableConstants);