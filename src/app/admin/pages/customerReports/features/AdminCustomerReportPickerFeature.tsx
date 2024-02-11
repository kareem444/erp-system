import { AdminReportsPickersComponent } from "src/app/admin/components/AdminReportsPickersComponent";
import AdminSearchCustomerReportsStructure from "../structures/AdminSearchCustomerReportsStructure";

const AdminCustomerReportPickerFeature = () => {
    return (
        <AdminReportsPickersComponent {...AdminSearchCustomerReportsStructure()} />
    );
};

export default AdminCustomerReportPickerFeature;
