import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetCustomerReportsStructure from "../structures/AdminGetCustomerReportsStructure";

const AdminCustomerReportsDetailsFeature = () => {
    return (
        <AdminDetailsStatusContainer {...AdminGetCustomerReportsStructure()} />
    );
};

export default AdminCustomerReportsDetailsFeature;
