import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetSupplierStructure } from "../structures/AdminGetSupplierStructure";

const AdminSupplierDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetSupplierStructure()} />;
};

export default AdminSupplierDetailsFeature;
