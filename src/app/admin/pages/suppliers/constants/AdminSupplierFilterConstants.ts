import { FilterItem } from "src/common/components/FilterComponent";
import { AdminSupplierInputsConstants } from "./AdminSuppliersInputsConstants";
import { AdminSupplierTableConstants } from "./AdminSupplierTableConstants";

export const AdminSupplierFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminSupplierTableConstants.name,
        value: AdminSupplierInputsConstants.suppliername,
    },
    {
        name: AdminSupplierTableConstants.mobile,
        value: AdminSupplierInputsConstants.phone1,
    },
    {
        name: AdminSupplierTableConstants.taxNumber,
        value: AdminSupplierInputsConstants.taxNo,
    },
    {
        name: AdminSupplierTableConstants.address,
        value: AdminSupplierInputsConstants.personaddress,
    }
]