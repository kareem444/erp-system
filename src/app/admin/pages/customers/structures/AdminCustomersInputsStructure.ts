import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/translateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminCustomerInputsConstants } from "../constants/AdminCustomersConstants"

export const AdminCustomersInputsItemsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminCustomerInputsConstants.name,
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: translate(`Mobile`),
            validatedInput: {
                name: AdminCustomerInputsConstants.mobile,
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: AdminCustomerInputsConstants.taxNumber,
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: AdminCustomerInputsConstants.address,
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
    ]
}
