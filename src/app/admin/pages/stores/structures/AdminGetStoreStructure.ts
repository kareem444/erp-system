import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminStoresRepo } from "../repo/AdminStoresRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { ITableContent } from "src/common/components/TableComponent";
import { AdminStoreTableHeaderConstants } from "../constants/AdminStoreTableConstants";
import { IAdminStoreModel } from "src/app/admin/models/AdminStoreModel";

export const AdminGetStoreStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminStoreModel[]>({
        key: AsyncStateConstants.stores,
        queryFn: () => AdminStoresRepo.getStores(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.message ?? "", "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminStoreTableHeaderConstants,
        items: data || [],
        selectors: {
            accountno: (item: IAdminStoreModel) => item.accountno,
        },
        nameSelector: (item: IAdminStoreModel) => item.stockname,
        buttons: {
            onEdit: (item: IAdminStoreModel) => {
                setState(item);
                openEditModal("adminEditStoreModal");
            },
            onDelete: (item: IAdminStoreModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteStoreModal",
                    "onDeleteStoreModalDelete"
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