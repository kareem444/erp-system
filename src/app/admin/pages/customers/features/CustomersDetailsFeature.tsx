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
        header: ["Name", "Mobile", "Tax Number", "Address"],
        items: data || [],
        showFilterDropDown: true,
        filter: ["customername", "phone1", "taxno", "personaddress"],
        defaultFilterItem: "Name",
        selectors: {
            phone1 : (item: IAdminCustomerModel) => item.phone1,
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

    return (
        <AdminDetailsStatusContainer
            tableContent={tableContent}
            isLoading={isLoading && !data}
            isError={isError}
            isData={!!data && data.length > 0}
        />
    );
}
