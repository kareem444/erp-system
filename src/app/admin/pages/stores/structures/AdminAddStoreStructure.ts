import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminStoresInputsStructure } from "./AdminStoresInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminStoreInputs } from "../interfaces/AdminStoresInterface";
import { IAdminStoreModel } from "src/app/admin/models/AdminStoreModel";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminStoresRepo } from "../repo/AdminStoresRepo";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddStoreStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { createOperation } = useCrudHandler<IAdminStoreModel>('stores')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminStoresRepo.createStore(data),
            options: {
                onSuccess(id: number, param: IAdminStoreInputs) {
                    
                    createOperation({ ...param, active: false, id});
                    showNotification('Stores added successfully')
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some thing went wrong', 'error')
                }
            }
        })

        
        const handelOnSubmit = (data: IAdminStoreInputs) => {
            mutate(data);
        }

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-plus",
            isLoading
        };

        const defaultValues: IAdminStoreInputs = {
            stockname: '',
            accountno: '',
        };

        return {
            inputs: AdminStoresInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
