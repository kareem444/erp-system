import {
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/translateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { InventoryDisbursementInputsStructure } from './InventoryDisbursementStructure'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export const AddInventoryDisbursementStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { state, resetProduct } = useProductUiReducer()
        const { openModel } = useModalReducer()

        const isMultiSizeProduct = state.data?.productSizes?.length === 0 
        const openEditProductModal = () => {
            resetProduct()
            openModel({
                modalComponent: 'printDisbursementPermissionModal',
                size: '5xl',
                title: {
                    text: 'Print permission'
                },
                onClose: 'onEditProductModalClose',
            })
        }

        return {
            inputs: InventoryDisbursementInputsStructure(),
            button: {
                text: translate(TRANSLATE.ADD),
                icon: 'fi-rr-plus',
               disabled: isMultiSizeProduct? true: false
            },
            containerClassName: 'grid-rows-2 grid-flow-col',
            onSubmit: () => {   
                const obj = {
                    store: state.store,
                    agentType: state.agentType,
                  productDetails: state.data?.productSizes
                }
                //open modal to print the disbursement permission
                openEditProductModal();
                    console.log(obj)
            }
        }
    }
