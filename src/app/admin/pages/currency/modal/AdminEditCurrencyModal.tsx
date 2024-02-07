import FormComponent from 'src/common/components/FormComponent';
import { AdminEditCurrencyStructure } from '../structures/AdminEditCurrencyStructure';

const AdminEditCurrencyModal = () => {
    return (
        <>
            <FormComponent {...AdminEditCurrencyStructure()} />
        </>
    )
};

export default AdminEditCurrencyModal;
