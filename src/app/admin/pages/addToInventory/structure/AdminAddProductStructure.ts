import {
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/translateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { ProductInputsStructure } from './AdminProductInputsStructure'
import useProductUiReducer from '../redux/ui/useProductUiReducer'

export const AdminAddProductFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { state } = useProductUiReducer()

        const isMultiSizeProduct = state.data?.productSizes?.length === 0 

        return {
            inputs: ProductInputsStructure(),
            button: {
                text: translate(TRANSLATE.ADD),
                icon: 'fi-rr-plus',
               disabled: isMultiSizeProduct? true: false
            },
            containerClassName: 'grid-rows-2 grid-flow-col',
            onSubmit: () => {   
                const obj = {
                    store: state.store,
                  productDetails: state.data?.productSizes
                }
                    console.log(obj)
            }
        }
    }
