import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer';
import { AdminGetUnitStructure } from '../structures/AdminGetUnitStructure';

const AdminCustomerDetailsFeature = () => {
  return <AdminDetailsStatusContainer {...AdminGetUnitStructure()} />;
};

export default AdminCustomerDetailsFeature;
