import { IDefaultValuesProperties, IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/translateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'

export const PrintDisbursementPermissionFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        inputs: [{labelTitle: 'Add Note'}],
        button: {
            text: translate(TRANSLATE.PRINT),
            icon: 'fi-rr-print'
        },
        containerClassName: 'grid-rows-2 grid-flow-col',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        }
    }
}