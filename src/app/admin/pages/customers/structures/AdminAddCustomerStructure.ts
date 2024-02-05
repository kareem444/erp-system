import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCustomersInputsStructure } from "./AdminCustomersInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddCustomerStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { createOperation } = useCrudHandler<IAdminCustomerModel>('customers')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCustomersRepo.createCustomer(data),
            options: {
                onSuccess(id: number, param: IAdminCustomerInputs) {
                    createOperation({ ...param, active: false, id })
                    showNotification('Customer added successfully')
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some thing went wrong', 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminCustomerInputs) => mutate(data);

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-plus",
            isLoading
        };

        const defaultValues: IAdminCustomerInputs = {
            customername: '',
            contactname: '',
            personaddress: '',
            emailaddress: '',
            phone1: '',
            phone2: '',
            taxno: '',
            cno: '',
            maxcredit: 0,
            maxtime: 0,
            intbalance: 0,
            accountno: '',
        };

        return {
            inputs: AdminCustomersInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
