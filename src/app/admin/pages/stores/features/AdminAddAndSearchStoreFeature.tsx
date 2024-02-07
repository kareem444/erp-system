import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer';
import { AdminStoreFilterConstants } from '../constants/AdminStoresFilterConstants';

export default function AddStoreFeature() {
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
