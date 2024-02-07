import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminSuppliersRepo } from "../repo/AdminSuppliersRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { ITableContent } from "src/common/components/TableComponent";
import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel";
import { AdminSupplierTableHeaderConstants } from "../constants/AdminSupplierTableConstants";

export const AdminGetSupplierStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminSupplierModel[]>({
        key: AsyncStateConstants.suppliers,
        queryFn: () => AdminSuppliersRepo.getSuppliers(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.message ?? "", "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminSupplierTableHeaderConstants,
        items: data || [],
        selectors: {
            phone1: (item: IAdminSupplierModel) => item.phone1,
            taxNo: (item: IAdminSupplierModel) => item.taxNo,
            personaddress: (item: IAdminSupplierModel) => item.personaddress,
        },
        nameSelector: (item: IAdminSupplierModel) => item.suppliername,
        buttons: {
            onEdit: (item: IAdminSupplierModel) => {
                setState(item);
                openEditModal("adminEditSupplierModal");
            },
            onDelete: (item: IAdminSupplierModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteSupplierModal",
                    "onDeleteSupplierModalDelete"
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