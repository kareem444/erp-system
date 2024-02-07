import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetCurrencyStructure } from "../structures/AdminGetCurrencyStructure";

const AdminCurrencyDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetCurrencyStructure()} />;
};

export default AdminCurrencyDetailsFeature;
