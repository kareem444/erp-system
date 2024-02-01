import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCustomersInputsItemsStructure } from "./AdminCustomersInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";

export const AdminAddCustomerFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { setState } = useAsyncState<IAdminCustomerModel[]>(AsyncStateConstants.customers)

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCustomersRepo.createCustomer(data),
            options: {
                onSuccess(id: number, param: IAdminCustomerInputs) {
                    setState(prevState => {
                        const newCustomer = { ...param, active: false, id }
                        return {
                            data: [...(prevState?.data || []), newCustomer]
                        }
                    })
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
            inputs: AdminCustomersInputsItemsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
