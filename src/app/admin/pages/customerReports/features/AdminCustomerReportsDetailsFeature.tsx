import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetCustomerReportsStructure from "../structures/AdminGetCustomerReportsStructure";
import Invoice from "src/common/pdf/invoice";

const AdminCustomerReportsDetailsFeature = () => {
    const { ref , ...props } = AdminGetCustomerReportsStructure();
    return (
        <>
        <div style={{display:'none'}}>

            <Invoice ref={ref} />
        </div>
            <AdminDetailsStatusContainer {...props} />
        </>
    );
};

export default AdminCustomerReportsDetailsFeature;
