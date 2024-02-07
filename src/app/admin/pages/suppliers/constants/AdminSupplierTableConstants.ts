export const AdminSupplierTableConstants = {
    name: "Name",
    mobile: "Mobile",
    taxNumber: "Tax Number",
    address: "Address",
}

type SupplierTableKeys = keyof typeof AdminSupplierTableConstants;
type SupplierTableValues = typeof AdminSupplierTableConstants[SupplierTableKeys];

export const AdminSupplierTableHeaderConstants: SupplierTableValues[] = Object.values(AdminSupplierTableConstants);