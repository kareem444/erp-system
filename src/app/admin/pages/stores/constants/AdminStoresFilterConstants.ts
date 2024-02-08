import { FilterItem } from "src/common/components/FilterComponent";
import { AdminStoreInputsConstants } from "./AdminStoresInputsConstants";
import { AdminStoreTableConstants } from "./AdminStoreTableConstants";

export const AdminStoreFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminStoreTableConstants.stockname,
        value: AdminStoreInputsConstants.stockname,
    }
]