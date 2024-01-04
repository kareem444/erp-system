import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/translateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { ProductInputsStructure } from './AdminProductInputsStructure'

export const AdminAddProductFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()

        return {
            inputs: ProductInputsStructure(),
            button: {
                text: translate(TRANSLATE.ADD),
                icon: 'fi-rr-plus'
            },
            containerClassName: 'grid-rows-2 grid-flow-col',
            onSubmit: (data: IDefaultValuesProperties) => {
                console.log(data)
            },
            defaultValues: {
                nameEn: '',
                nameAr: '',
                price: '',
                image: ''
            }
        }
    }
