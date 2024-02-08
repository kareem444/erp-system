import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AddInventoryDisbursementStructure } from '../structure/AdminAddInventoryDisbursementStructure'
import AdminAddSizeToProductSlice from '../slices/AdminAddSizeToProductSlice'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import AdminProductSideBordersSlice from '../slices/AdminProductSideBordersSlice'

export default function AddInventoryPermission() {
    const { title } = usePageTitle()
    const { translate } = useTranslate()

    const { state, addProductSize } = useProductUiReducer()

    const isMultiSizeProduct = state.productType === 'show'

    const handelAddProductSize = (val: { size: string; price: string }) => {
        addProductSize(val)
    }

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${translate(title || '')}`}
        >
            <div className='flex gap-10'>
                <FormComponent
                    {...AddInventoryDisbursementStructure()}
                    child={
                        isMultiSizeProduct ? (
                            <AdminAddSizeToProductSlice onSubmit={handelAddProductSize} />
                        ) : undefined
                    }
                />
                {!!isMultiSizeProduct && (
                    <div className='w-1/4 flex flex-col gap-5'>
                        <AdminProductSideBordersSlice />
                    </div>
                )}
            </div>
        </CollapseComponent>
    )
}
