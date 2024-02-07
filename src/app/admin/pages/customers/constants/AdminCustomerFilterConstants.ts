import { FilterItem } from "src/common/components/FilterComponent";
import { AdminCustomerInputsConstants } from "./AdminCustomersInputsConstants";
import { AdminCustomerTableConstants } from "./AdminCustomerTableConstants";

export const AdminCustomerFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminCustomerTableConstants.name,
        value: AdminCustomerInputsConstants.customername,
    },
    {
        name: AdminCustomerTableConstants.mobile,
        value: AdminCustomerInputsConstants.phone1,
    },
    {
        name: AdminCustomerTableConstants.taxNumber,
        value: AdminCustomerInputsConstants.taxno,
    },
    {
        name: AdminCustomerTableConstants.address,
        value: AdminCustomerInputsConstants.personaddress,
    }
]