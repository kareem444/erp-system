import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCustomersInputsItemsStructure } from "./AdminCustomersInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";

export const AdminEditCustomerModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { state: selectedCustomer } = useEchoState<IAdminCustomerModel>(EchoStateConstants.selectedItem)
        const { setState } = useAsyncState<IAdminCustomerModel[]>(AsyncStateConstants.customers)
        const { closeModal } = useModalReducer()

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCustomersRepo.updateCustomer(data),
            options: {
                onSuccess(_, param: IAdminCustomerInputs) {
                    setState(prevState => {
                        return {
                            data: prevState?.data?.map(item => {
                                if (item.id === selectedCustomer.id) {
                                    return { ...item, ...param }
                                }
                                return item
                            })
                        }
                    })
                    showNotification('Customer updated successfully')
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error')
                },
            }
        })

        const handelOnSubmit = (data: IAdminCustomerInputs) => {
            const handelUpdatedCustomerData: any = {
                ...selectedCustomer,
                ...data
            }
            delete handelUpdatedCustomerData.syncid
            mutate(handelUpdatedCustomerData)
        };

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-pencil",
            isLoading
        };

        const defaultValues: IAdminCustomerInputs = {
            customername: selectedCustomer?.customername ?? "",
            contactname: selectedCustomer?.contactname ?? "",
            personaddress: selectedCustomer?.personaddress ?? "",
            emailaddress: selectedCustomer?.emailaddress ?? "",
            phone1: selectedCustomer?.phone1 ?? "",
            phone2: selectedCustomer?.phone2 ?? "",
            taxno: selectedCustomer?.taxno ?? "",
            cno: selectedCustomer?.cno ?? "",
            maxcredit: selectedCustomer?.maxcredit ?? 0,
            maxtime: selectedCustomer?.maxtime ?? 0,
            intbalance: selectedCustomer?.intbalance ?? 0,
            accountno: selectedCustomer?.accountno ?? "",
        };

        return {
            inputs: AdminCustomersInputsItemsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
