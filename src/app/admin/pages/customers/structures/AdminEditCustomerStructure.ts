import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCustomersInputsStructure } from "./AdminCustomersInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditCustomerStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { state: selectedCustomer } = useEchoState<IAdminCustomerModel>(EchoStateConstants.selectedItem)
        const { closeModal } = useModalReducer()
        const { updateOperation } = useCrudHandler<IAdminCustomerModel>('customers')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCustomersRepo.updateCustomer(data),
            options: {
                onSuccess(_, param: IAdminCustomerInputs) {
                    updateOperation({ ...selectedCustomer, ...param })
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
            text: translate(TRANSLATE.EDIT),
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
            inputs: AdminCustomersInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
