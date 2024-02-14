import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetCustomerReportsStructure from "../structures/AdminGetCustomerReportsStructure";
import AdminCustomerReport from "../report/AdminCustomerReport";

const AdminCustomerReportsDetailsFeature = () => {
    const { ref, ...props } = AdminGetCustomerReportsStructure();

    return (
        <>
            <div className="hidden">
                <AdminCustomerReport ref={ref} />
            </div>
            <AdminDetailsStatusContainer {...props} />
        </>
    );
};

export default AdminCustomerReportsDetailsFeature;
