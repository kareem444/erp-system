import FormComponent from 'src/common/components/FormComponent';
import { AdminEditCustomerModalFormStructure } from '../structures/AdminEditCustomerStructure';

const AdminEditCustomerModal = () => {
    return (
        <>
            <FormComponent {...AdminEditCustomerModalFormStructure()} />
        </>
    )
};

export default AdminEditCustomerModal;
