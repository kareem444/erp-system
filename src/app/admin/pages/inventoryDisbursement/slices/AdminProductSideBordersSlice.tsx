import AdminItemsBoxComponent from 'src/app/admin/components/AdminItemsBoxComponent'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { TRANSLATE } from 'src/common/constants/translateConstants'

export default function AdminProductSideBordersSlice() {
    const { translate } = useTranslate()
    const {
        state,
        removeProductSize,
        removeAllProductSize,
    } = useProductUiReducer()

    const showProductSizesBorder = state.productType === 'show'

    return (
        <>
            {!!showProductSizesBorder && (
                <AdminItemsBoxComponent
                    title= {`${translate(TRANSLATE.ITEMS)}`}
                    items={state.data?.productSizes}
                    selector={(item: { size: string; price: string }) =>
                        `${item.size} ${translate(TRANSLATE.CURRENCY)} ${item.price}`
                    }
                    onDeleteAll={() => removeAllProductSize()}
                    onDeleteItem={(item: any, index) => removeProductSize({ index })}
                />
            )}

        </>
    )
}
