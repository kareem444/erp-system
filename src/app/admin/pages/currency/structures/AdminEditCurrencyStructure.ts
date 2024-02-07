import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCurrencyInputsStructure } from "./AdminCurrencyInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminCurrencyInputs } from "../interfaces/AdminCurrencyInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminCurrencyRepo } from "../repo/AdminCurrencyRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import { IAdminCurrencyModel } from "src/app/admin/models/AdminCurrencyModel";

export const AdminEditCurrencyStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { state: selectedCurrency } = useEchoState<IAdminCurrencyModel>(EchoStateConstants.selectedItem)
        const { closeModal } = useModalReducer()
        const { updateOperation } = useCrudHandler<IAdminCurrencyModel>('currency')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCurrencyRepo.updateCurrency(data),
            options: {
                onSuccess(_, param: IAdminCurrencyInputs) {
                    updateOperation({ ...selectedCurrency, ...param })
                    showNotification('Currency updated successfully')
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error')
                },
            }
        })

        const handelOnSubmit = (data: IAdminCurrencyInputs) => {
            mutate({ ...selectedCurrency, ...data })
        };

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.EDIT),
            icon: "fi-rr-pencil",
            isLoading
        };

        const defaultValues: IAdminCurrencyInputs = {
            currencyName: selectedCurrency?.currencyName ?? "",
            isdefault: selectedCurrency?.isdefault ?? "",
        };

        return {
            inputs: AdminCurrencyInputsStructure(true),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
