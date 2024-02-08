import FormComponent from 'src/common/components/FormComponent';
import { AdminEditUnitStructure } from '../structures/AdminEditUnitStructure';

const AdminEditCustomerModal = () => {
  return (
    <>
      <FormComponent {...AdminEditUnitStructure()} />
    </>
  );
};

export default AdminEditCustomerModal;
