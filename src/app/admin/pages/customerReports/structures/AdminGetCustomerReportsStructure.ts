import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { IAdminCustomerReportModel } from "src/app/admin/models/AdminCustomerReportModel";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import { ITableContent } from "src/common/components/TableComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminCustomerReportTableHeaderConstants } from "../constants/AdminCustomerReportTableConstants";
import { useReactToPrint } from 'react-to-print';
import { Ref, useRef } from "react";

const AdminGetCustomerReportsStructure = (): IAdminDetailsStatusContainerProps & {ref: Ref<HTMLDivElement>} => {
    const { state } = useAsyncState<IAdminCustomerReportModel[]>(AsyncStateConstants.customerReports)
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    const tableContent: ITableContent = {
        header: AdminCustomerReportTableHeaderConstants,
        items: state?.data || [],
        selectors: {
            1: (item: IAdminCustomerReportModel) => item.documenttype,
            2: (item: IAdminCustomerReportModel) => item.quant,
            3: (item: IAdminCustomerReportModel) => item.price,
            4: (item: IAdminCustomerReportModel) => item.total,
            5: (item: IAdminCustomerReportModel) => item.documentdate,
        },
        nameSelector: (item: IAdminCustomerReportModel) => item.itemname,
    };

    return {
        tableContent,
        isData: !!state?.data && state?.data.length > 0,
        isLoading: state?.isLoading ?? false,
        isError: state?.isError ?? false,
        ref: componentRef,
        onPdf: () => console.log("onPdf"),
        onPrint: () => handlePrint(),
        onWhatsapp: () => console.log("onWhatsapp"),
    }
};

export default AdminGetCustomerReportsStructure;
