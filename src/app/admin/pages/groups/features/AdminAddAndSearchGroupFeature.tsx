import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer';
import { AdminGroupFilterConstants } from '../constants/AdminGroupsFilterConstants';

export default function AdminAddAndSearchGroupFeature() {
    return (
        <AdminAddAndSearchContainer
        addModalComponent="adminAddGroupModal"
        filter={{
            items: AdminGroupFilterConstants,
            originalItemsKey: "groups",
        }}
    />
    );
}
