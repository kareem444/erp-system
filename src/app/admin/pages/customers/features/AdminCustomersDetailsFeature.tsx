import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetCustomerStructure } from "../structures/AdminGetCustomerStructure";

const AdminCustomerDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetCustomerStructure()} />;
};

export default AdminCustomerDetailsFeature;
