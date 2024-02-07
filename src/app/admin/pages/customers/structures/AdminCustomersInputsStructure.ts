import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/translateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminCustomerInputsConstants } from "../constants/AdminCustomersInputsConstants"

export const AdminCustomersInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminCustomerInputsConstants.customername,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Email`),
            validatedInput: {
                name: AdminCustomerInputsConstants.emailaddress,
                rules: {
                    isEmail: true,
                }
            }
        },
        {
            labelTitle: translate(`Mobile 1`),
            validatedInput: {
                name: AdminCustomerInputsConstants.phone1,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Mobile 2`),
            validatedInput: {
                name: AdminCustomerInputsConstants.phone2,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: AdminCustomerInputsConstants.taxno,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: AdminCustomerInputsConstants.personaddress,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Account Number`),
            validatedInput: {
                name: AdminCustomerInputsConstants.accountno,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Contact Name`),
            validatedInput: {
                name: AdminCustomerInputsConstants.contactname,
                rules: {
                }
            }
        },
        {
            type: "number",
            labelTitle: translate(`Max Credit`),
            validatedInput: {
                name: AdminCustomerInputsConstants.maxcredit,
                rules: {
                }
            }
        },
        {
            type: "number",
            labelTitle: translate(`Max Time`),
            validatedInput: {
                name: AdminCustomerInputsConstants.maxtime,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`CR`),
            validatedInput: {
                name: AdminCustomerInputsConstants.cno,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Initial Balance`),
            validatedInput: {
                name: AdminCustomerInputsConstants.intbalance,
                rules: {
                }
            }
        },
    ]
}