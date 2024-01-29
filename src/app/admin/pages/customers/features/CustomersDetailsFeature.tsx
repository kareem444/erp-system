import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { showNotification } from "src/common/components/ShowNotificationComponent";

export default function CustomerDetailsFeature() {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError } = useFetch<IAdminCustomerModel[]>({
        key: AsyncStateConstants.customers,
        queryFn: () => AdminCustomersRepo.getCustomers(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.message ?? "", "error"),
        },
    });

    const tableContent: ITableContent = {
        header: ["Name", "Mobile", "TaxNumber", "Address"],
        items: data || [],
        showFilterDropDown: true,
        filter: ["Name", "Mobile", "TaxNumber", "Address"],
        defaultFilterItem: "Name",
        selectors: {
            Mobile: (item: IAdminCustomerModel) => item.mobile,
            TaxNumber: (item: IAdminCustomerModel) => item.taxNumber,
            Address: (item: IAdminCustomerModel) => item.address,
        },
        nameSelector: (item: IAdminCustomerModel) => item.name,
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

    return (
        <AdminDetailsStatusContainer
            tableContent={tableContent}
            isLoading={isLoading && !data}
            isError={isError}
            isData={!!data && data.length > 0}
        />
    );
}
