import { useAppDispatch, useAppSelector } from 'src/common/redux/store'
import { InventoryUiState } from './InventoryUiState'
import { inventoryUiState } from './InventoryUiSelectors'
import {
    addProductAdditionAction,
    addProductSizeAction,
    addProductTaxAction,
    changeProductTypeAction,
    addCurrentStoreAction,
    removeAllProductAdditionsAction,
    removeAllProductSizeAction,
    removeAllProductTaxesAction,
    removeProductAdditionAction,
    removeProductSizeAction,
    removeProductTaxAction
} from './InventoryUiSlice'

export default function useProductUiReducer() {
    const state: InventoryUiState = useAppSelector(inventoryUiState)
    const dispatch = useAppDispatch()

    return {
        state,
        changeProductType: (payload: InventoryUiState) => {
            dispatch(changeProductTypeAction(payload))
        },
        addCurrentStore: (payload: InventoryUiState) => {
            dispatch(addCurrentStoreAction(payload))
        },
        addProductSize: (payload: { size: string; price: string }) => {
            dispatch(addProductSizeAction(payload))
        },
        removeProductSize: (payload: { index: number }) => {
            dispatch(removeProductSizeAction(payload))
        },
        removeAllProductSize: () => {
            dispatch(removeAllProductSizeAction())
        },
        addProductTax: (payload: { id: string, name: string }) => {
            dispatch(addProductTaxAction(payload))
        },
        removeProductTax: (payload: { index: number }) => {
            dispatch(removeProductTaxAction(payload))
        },
        removeAllProductTaxes: () => {
            dispatch(removeAllProductTaxesAction())
        },
        addProductAddition: (payload: { id: string, name: string }) => {
            dispatch(addProductAdditionAction(payload))
        },
        removeProductAddition: (payload: { index: number }) => {
            dispatch(removeProductAdditionAction(payload))
        },
        removeAllProductAdditions: () => {
            dispatch(removeAllProductAdditionsAction())
        },
        resetProduct: () => {
            dispatch(changeProductTypeAction({ productType: 'hide' }))
            dispatch(removeAllProductSizeAction())
            dispatch(removeAllProductTaxesAction())
            dispatch(removeAllProductAdditionsAction())
        }
    }
}
