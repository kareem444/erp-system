import { FilterItem } from "src/common/components/FilterComponent";
import { AdminCurrencyInputsConstants } from "./AdminCurrencyInputsConstants";
import { AdminCurrencyTableConstants } from "./AdminCurrencyTableConstants";

export const AdminCurrencyFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminCurrencyTableConstants.name,
        value: AdminCurrencyInputsConstants.currencyName,
    }
]