import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer';
import { AdminStoreFilterConstants } from '../constants/AdminStoresFilterConstants';

export default function AdminAddAndSearchStoreFeature() {
    return (
        <AdminAddAndSearchContainer
            addModalComponent="adminAddStoreModal"
            filter={{
                items: AdminStoreFilterConstants,
                originalItemsKey: "stores",
            }}
        />
    );
}
