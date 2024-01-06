import FormComponent from 'src/common/components/FormComponent';
import { AdminEditStoreModalFormStructure } from '../structures/AdminAddStoreStructure';

const AdminEditStoreModal = () => {
    return (
        <>
            <FormComponent {...AdminEditStoreModalFormStructure()} />
        </>
    )
};

export default AdminEditStoreModal;
