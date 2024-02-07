export const UnitTableConstants = {
  unitname: "Name",
}

type CustomerTableKeys = keyof typeof UnitTableConstants;
type CustomerTableValues = typeof UnitTableConstants[CustomerTableKeys];

export const UnitTableHeaderConstants: CustomerTableValues[] = Object.values(UnitTableConstants);