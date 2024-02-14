import { Ref, forwardRef } from "react";
import AdminTableReportComponent from "src/app/admin/components/AdminTableReportComponent";
import { IAdminCustomerReportModel } from "src/app/admin/models/AdminCustomerReportModel";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminReportTableHeaderConstants } from "../constants/AdminCustomerReportTableConstants";

const AdminCustomerReport = forwardRef((_, ref: Ref<HTMLDivElement>) => {
    const { state } = useAsyncState<IAdminCustomerReportModel[]>(AsyncStateConstants.customerReports);

    const selectors = {
        1: (item: IAdminCustomerReportModel) => item.documentdate,
        2: (item: IAdminCustomerReportModel) => item.documentid,
        3: (item: IAdminCustomerReportModel) => item.referenceno,
        4: (item: IAdminCustomerReportModel) => item.documenttype,
        5: (item: IAdminCustomerReportModel) => item.itemname,
        6: (item: IAdminCustomerReportModel) => item.quant,
        7: (item: IAdminCustomerReportModel) => item.price,
        8: (item: IAdminCustomerReportModel) => item.total,
    };

    return (
        <AdminTableReportComponent
            ref={ref}
            data={state?.data}
            headers={AdminReportTableHeaderConstants}
            selectors={selectors}
        >
            <div>
                <p className="text-center">كشف حساب عميل تفصيلى</p>
            </div>
            <div className="text-right">
                <p>العميل : محمود</p>
                <p>2024-02-11 : 2023-01- من : 01</p>
            </div>
        </AdminTableReportComponent>
    );
});

export default AdminCustomerReport;
