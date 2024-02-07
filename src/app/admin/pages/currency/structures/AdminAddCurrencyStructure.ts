import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminCurrencyInputsStructure } from "./AdminCurrencyInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminCurrencyInputs } from "../interfaces/AdminCurrencyInterface";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminCurrencyRepo } from "../repo/AdminCurrencyRepo";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import { IAdminCurrencyModel } from "src/app/admin/models/AdminCurrencyModel";

export const AdminAddCurrencyStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { createOperation } = useCrudHandler<IAdminCurrencyModel>('currency')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCurrencyRepo.createCurrency(data),
            options: {
                onSuccess(id: number, param: IAdminCurrencyInputs) {
                    createOperation({ ...param, active: false, id })
                    showNotification('Currency added successfully')
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some thing went wrong', 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminCurrencyInputs) => mutate(data);

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-plus",
            isLoading
        };

        const defaultValues: IAdminCurrencyInputs = {
            currencyName: '',
            isdefault: false
        };

        return {
            inputs: AdminCurrencyInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
