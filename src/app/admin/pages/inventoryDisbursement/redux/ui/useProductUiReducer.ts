import { useAppDispatch, useAppSelector } from 'src/common/redux/store'
import {
    addProductSizeAction,
    changeProductTypeAction,
    addCurrentStoreAction,
    removeAllProductSizeAction,
    removeProductSizeAction,
    addAgentTypeAction
} from './DisbursementInventoryUiSlice'
import { disbursementInventoryUiState } from './DisbursementInventoryUiSelectors'
import { DisbursementInventoryUiState } from './DisbursementInventoryUiState'


export default function useProductUiReducer() {
    const state: DisbursementInventoryUiState = useAppSelector(disbursementInventoryUiState)
    const dispatch = useAppDispatch()

    return {
        state,
        changeProductType: (payload: DisbursementInventoryUiState) => {
            dispatch(changeProductTypeAction(payload))
        },
        addCurrentStore: (payload: DisbursementInventoryUiState) => {
            dispatch(addCurrentStoreAction(payload))
        },
        addAgentType: (payload: DisbursementInventoryUiState) => {
            dispatch(addAgentTypeAction(payload))
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
        resetProduct: () => {
            dispatch(changeProductTypeAction({ productType: 'hide' }))
            dispatch(removeAllProductSizeAction())
        }
    }
}

