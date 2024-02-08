export const AdminStoreTableConstants = {
    stockname: "Name",
    accountno: "Account NO"
}

type StoreTableKeys = keyof typeof AdminStoreTableConstants;
type StoreTableValues = typeof AdminStoreTableConstants[StoreTableKeys];

export const AdminStoreTableHeaderConstants: StoreTableValues[] = Object.values(AdminStoreTableConstants);