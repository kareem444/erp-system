import { InputComponentProps } from "src/common/components/InputComponent"
import { TRANSLATE } from "src/common/constants/translateConstants"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminGroupInputsConstants } from "../constants/AdminGroupsInputsConstants"

export const AdminGroupsInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: 'col-span-12',
            validatedInput: {
                name: AdminGroupInputsConstants.groupname,
                rules: {
                    isRequired: true,
                }
            }
        }, 
    ]
}