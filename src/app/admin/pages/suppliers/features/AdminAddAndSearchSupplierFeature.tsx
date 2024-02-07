import AdminAddAndSearchContainer from "src/app/admin/containers/AdminAddAndSearchContainer";
import { AdminSupplierFilterConstants } from "../constants/AdminSupplierFilterConstants";

export default function AdminAddAndSearchSupplierFeature() {
    return (
        <AdminAddAndSearchContainer
            addModalComponent="adminAddSupplierModal"
            filter={{
                items: AdminSupplierFilterConstants,
                originalItemsKey: "suppliers",
            }}
        />
    );
}
