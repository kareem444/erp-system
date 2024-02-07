import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetGroupStructure } from "../structures/AdminGetGroupStructure";

const AdminGroupDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetGroupStructure()} />;
};

export default AdminGroupDetailsFeature;
