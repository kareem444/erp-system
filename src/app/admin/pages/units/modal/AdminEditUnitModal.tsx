import FormComponent from 'src/common/components/FormComponent';
import { AdminEditUnitStructure } from '../structures/AdminEditUnitStructure';

const AdminEditUnitsModal = () => {
  return (
    <>
      <FormComponent {...AdminEditUnitStructure()} />
    </>
  );
};

export default AdminEditUnitsModal;
