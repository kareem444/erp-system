import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminStoresInputsStructure } from "./AdminStoresInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminStoreInputs } from "../interfaces/AdminStoresInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminStoreModel } from "src/app/admin/models/AdminStoreModel";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminStoresRepo } from "../repo/AdminStoresRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditStoreStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { state: selectedStore } = useEchoState<IAdminStoreModel>(EchoStateConstants.selectedItem)
        const { closeModal } = useModalReducer()
        const { updateOperation } = useCrudHandler<IAdminStoreModel>('stores')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminStoresRepo.updateStore(data),
            options: {
                onSuccess(_, param: IAdminStoreInputs) {
                    updateOperation({ ...selectedStore, ...param })
                    showNotification('Store updated successfully')
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error')
                },
            }
        })

        const handelOnSubmit = (data: IAdminStoreInputs) => mutate({ ...selectedStore, ...data });

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.EDIT),
            icon: "fi-rr-pencil",
            isLoading
        };

        const defaultValues: IAdminStoreInputs = {
            stockname: selectedStore?.stockname ?? "",
            accountno: selectedStore?.accountno ?? "",
        };

        return {
            inputs: AdminStoresInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
