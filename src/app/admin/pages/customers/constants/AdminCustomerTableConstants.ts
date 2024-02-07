export const AdminCustomerTableConstants = {
    name: "Name",
    mobile: "Mobile",
    taxNumber: "Tax Number",
    address: "Address",
}

type CustomerTableKeys = keyof typeof AdminCustomerTableConstants;
type CustomerTableValues = typeof AdminCustomerTableConstants[CustomerTableKeys];

export const AdminCustomerTableHeaderConstants: CustomerTableValues[] = Object.values(AdminCustomerTableConstants);