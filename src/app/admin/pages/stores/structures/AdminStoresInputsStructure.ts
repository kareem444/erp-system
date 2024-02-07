import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/translateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminStoreInputsConstants } from "../constants/AdminStoresInputsConstants"

export const AdminStoresInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: 'col-span-12',
            validatedInput: {
                name: AdminStoreInputsConstants.stockname,
                rules: {
                    isRequired: true,
                }
            }
        }, 
        {
            labelTitle: translate(`${TRANSLATE.STORE_CODE}`),
            containerStyle: 'col-span-12',
            validatedInput: {
                name: AdminStoreInputsConstants.accountno,
                rules: {
                    isRequired: true,
                }
            }
        }, 
    ]
}