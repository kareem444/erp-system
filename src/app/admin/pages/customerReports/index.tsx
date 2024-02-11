import { AdminReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import AdminCustomerReportPickerFeature from "./features/AdminCustomerReportPickerFeature"
import AdminCustomerReportsDetailsFeature from "./features/AdminCustomerReportsDetailsFeature"

function CustomerReportsPage() {
    return (
        <>
            <AdminCustomerReportPickerFeature />
            <AdminCustomerReportsDetailsFeature />
        </>
    )
}

export default CustomerReportsPage