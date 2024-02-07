import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminGroupsRepo } from "../repo/AdminGroupsRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { ITableContent } from "src/common/components/TableComponent";
import { AdminGroupTableHeaderConstants } from "../constants/AdminGroupTableConstants";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";

export const AdminGetGroupStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminGroupModel[]>({
        key: AsyncStateConstants.groups,
        queryFn: () => AdminGroupsRepo.getGroups(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.message ?? "", "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminGroupTableHeaderConstants,
        items: data || [],
        selectors: {
        },
        nameSelector: (item: IAdminGroupModel) => item.groupname,
        buttons: {
            onEdit: (item: IAdminGroupModel) => {
                setState(item);
                openEditModal("adminEditGroupModal");
            },
            onDelete: (item: IAdminGroupModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteGroupModal",
                    "onDeleteGroupModalDelete"
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