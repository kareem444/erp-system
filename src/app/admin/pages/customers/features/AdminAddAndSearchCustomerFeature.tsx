import AdminAddAndSearchContainer from "src/app/admin/containers/AdminAddAndSearchContainer";
import { AdminCustomerFilterConstants } from "../constants/AdminCustomerFilterConstants";

export default function AdminAddAndSearchCustomerFeature() {
    return (
        <AdminAddAndSearchContainer
            addModalComponent="adminAddCustomerModal"
            filter={{
                items: AdminCustomerFilterConstants,
                originalItemsKey: "customers",
            }}
        />
    );
}
