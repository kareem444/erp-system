import {
    AdminReportsPickersComponentProps,
    IReportSearchParams,
} from "src/app/admin/components/AdminReportsPickersComponent";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { DropDownSearchComponentProps } from "src/common/components/DropDownSearchComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminCustomerReportsRepo } from "../repo/AdminCustomerReportsRepo";
import { AdminCustomersRepo } from "../../customers/repo/AdminCustomersRepo";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { IAdminCustomerReportModel } from "src/app/admin/models/AdminCustomerReportModel";

const AdminSearchCustomerReportsStructure =
    (): AdminReportsPickersComponentProps => {
        const { data: customers, isLoading: isCustomerLoading, isError } = useFetch<IAdminCustomerModel[]>({
            key: AsyncStateConstants.customers,
            queryFn: () => AdminCustomersRepo.getCustomers(),
            options: {
                isExecuteOnInitIfNoData: true,
            }
        });

        const { query, isLoading } = useFetch<IAdminCustomerReportModel[]>({
            key: AsyncStateConstants.customerReports,
            queryFn: (param: IReportSearchParams<IAdminCustomerModel>) => AdminCustomerReportsRepo.getCustomerReports(param),
            options: {
                echoState: "all",
            }
        });

        const searchDropDown: DropDownSearchComponentProps = {
            data: customers,
            selectors: { text: "customername", value: "id" },
            isLoading: isCustomerLoading,
            isError,
        };

        const handelOnSearch = (search: IReportSearchParams<IAdminCustomerModel>) => query(search);

        return {
            onSearch: handelOnSearch,
            searchDropDown,
            isLoading,
        };
    };

export default AdminSearchCustomerReportsStructure;
