import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { ITableContent } from "src/common/components/TableComponent";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { AdminCustomerTableHeaderConstants } from "../constants/AdminCustomerTableConstants";

export const AdminGetCustomerStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminCustomerModel[]>({
        key: AsyncStateConstants.customers,
        queryFn: () => AdminCustomersRepo.getCustomers(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.message ?? "", "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminCustomerTableHeaderConstants,
        items: data || [],
        selectors: {
            phone1: (item: IAdminCustomerModel) => item.phone1,
            taxno: (item: IAdminCustomerModel) => item.taxno,
            personaddress: (item: IAdminCustomerModel) => item.personaddress,
        },
        nameSelector: (item: IAdminCustomerModel) => item.customername,
        buttons: {
            onEdit: (item: IAdminCustomerModel) => {
                setState(item);
                openEditModal("adminEditCustomerModal");
            },
            onDelete: (item: IAdminCustomerModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteCustomerModal",
                    "onDeleteCustomerModalDelete"
                );
            },
        },
    };

    return {
        isData: !!data && data.length > 0,
        isLoading,
        isError,
        tableContent,
        onRefresh: query,
    }
};