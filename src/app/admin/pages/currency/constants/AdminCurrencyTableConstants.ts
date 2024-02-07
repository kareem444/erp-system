export const AdminCurrencyTableConstants = {
    name: "Name",
    default: 'Default'
}

type CurrencyTableKeys = keyof typeof AdminCurrencyTableConstants;
type CurrencyTableValues = typeof AdminCurrencyTableConstants[CurrencyTableKeys];

export const AdminCurrencyTableHeaderConstants: CurrencyTableValues[] = Object.values(AdminCurrencyTableConstants);