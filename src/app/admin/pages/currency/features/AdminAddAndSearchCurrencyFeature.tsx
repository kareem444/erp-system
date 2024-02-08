import AdminAddAndSearchContainer from "src/app/admin/containers/AdminAddAndSearchContainer";
import { AdminCurrencyFilterConstants } from "../constants/AdminCurrencyFilterConstants";

export default function AdminAddAndSearchCurrencyFeature() {
    return (
        <AdminAddAndSearchContainer
            addModalComponent="adminAddCurrencyModal"
            filter={{
                items: AdminCurrencyFilterConstants,
                originalItemsKey: "currency",
            }}
            formatTitle="none"
        />
    );
}
