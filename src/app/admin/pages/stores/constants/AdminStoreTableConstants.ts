export const AdminStoreTableConstants = {
    stockname: "Stock Name",
    accountno: "Account Number"
}

type StoreTableKeys = keyof typeof AdminStoreTableConstants;
type StoreTableValues = typeof AdminStoreTableConstants[StoreTableKeys];

export const AdminStoreTableHeaderConstants: StoreTableValues[] = Object.values(AdminStoreTableConstants);