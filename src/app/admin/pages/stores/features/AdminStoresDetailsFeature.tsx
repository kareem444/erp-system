import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetStoreStructure } from "../structures/AdminGetStoreStructure";

const AdminStoreDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetStoreStructure()} />;
};

export default AdminStoreDetailsFeature;
