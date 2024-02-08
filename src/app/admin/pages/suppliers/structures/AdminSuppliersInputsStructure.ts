import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/translateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminSupplierInputsConstants } from "../constants/AdminSuppliersInputsConstants"

export const AdminSuppliersInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminSupplierInputsConstants.suppliername,
                rules: {
                    isRequired: true,
                }
            }
        },
        {
            labelTitle: translate(`Email`),
            validatedInput: {
                name: AdminSupplierInputsConstants.emailaddress,
                rules: {
                    isEmail: true,
                }
            }
        },
        {
            labelTitle: translate(`Mobile 1`),
            validatedInput: {
                name: AdminSupplierInputsConstants.phone1,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Mobile 2`),
            validatedInput: {
                name: AdminSupplierInputsConstants.phone2,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Tax Number`),
            validatedInput: {
                name: AdminSupplierInputsConstants.taxNo,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Address`),
            validatedInput: {
                name: AdminSupplierInputsConstants.personaddress,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Account Number`),
            validatedInput: {
                name: AdminSupplierInputsConstants.accountno,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Contact Name`),
            validatedInput: {
                name: AdminSupplierInputsConstants.contactname,
                rules: {
                }
            }
        },
        {
            type: "number",
            labelTitle: translate(`Max Credit`),
            validatedInput: {
                name: AdminSupplierInputsConstants.maxcredit,
                rules: {
                }
            }
        },
        {
            type: "number",
            labelTitle: translate(`Max Time`),
            validatedInput: {
                name: AdminSupplierInputsConstants.maxtime,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`CR`),
            validatedInput: {
                name: AdminSupplierInputsConstants.cno,
                rules: {
                }
            }
        },
        {
            labelTitle: translate(`Initial Balance`),
            validatedInput: {
                name: AdminSupplierInputsConstants.intbalance,
                rules: {
                }
            }
        },
    ]
}