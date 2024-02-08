import { FilterItem } from "src/common/components/FilterComponent";
import { AdminGroupInputsConstants } from "./AdminGroupsInputsConstants";
import { AdminGroupTableConstants } from "./AdminGroupTableConstants";

export const AdminGroupFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminGroupTableConstants.name,
        value: AdminGroupInputsConstants.groupname,
    }
]