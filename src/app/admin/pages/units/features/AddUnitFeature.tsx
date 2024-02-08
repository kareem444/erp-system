import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer';
import { UnitFilterConstants } from '../constants/AdminUnitFilterConstants';

export default function AdminAddAndSearchUnitFeature() {
  return (
    <AdminAddAndSearchContainer
      addModalComponent="adminAddUnitModal"
      filter={{
        items: UnitFilterConstants,
        originalItemsKey: 'units',
      }}
    />
  );
}
