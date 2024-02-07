import FormComponent from 'src/common/components/FormComponent';
import { AdminEditStoreStructure } from '../structures/AdminEditStoreStructure';

const AdminEditStoreModal = () => {
    return (
        <>
            <FormComponent {...AdminEditStoreStructure()} />
        </>
    )
};

export default AdminEditStoreModal;
