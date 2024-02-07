import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminCurrencyRepo } from "../repo/AdminCurrencyRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { ITableContent } from "src/common/components/TableComponent";
import { AdminCurrencyTableHeaderConstants } from "../constants/AdminCurrencyTableConstants";
import { IAdminCurrencyModel } from "src/app/admin/models/AdminCurrencyModel";

export const AdminGetCurrencyStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminCurrencyModel[]>({
        key: AsyncStateConstants.currency,
        queryFn: () => AdminCurrencyRepo.getCurrency(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.message ?? "", "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminCurrencyTableHeaderConstants,
        items: data || [],
        selectors: {
            isDefault: (item: IAdminCurrencyModel) => item.isdefault ? "true" : "false",
        },
        nameSelector: (item: IAdminCurrencyModel) => item.currencyName,
        buttons: {
            onEdit: (item: IAdminCurrencyModel) => {
                setState(item);
                openEditModal("adminEditCurrencyModal");
            },
            onDelete: (item: IAdminCurrencyModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteCurrencyModal",
                    "onDeleteCurrencyModalDelete"
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