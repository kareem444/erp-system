import ProductReducer from "../pages/products/redux/ui/ProductUiSlice";
import InventoryReducer from "../pages/addToInventory/redux/ui/InventoryUiSlice";
import disbursementInventoryReducer from "../pages/inventoryDisbursement/redux/ui/DisbursementInventoryUiSlice";
import ComboOfferReducer from "../pages/comboOffers/redux/ui/ComboOfferUiSlice";

export const adminReducer = {
    productUi: ProductReducer,
    inventoryUi: InventoryReducer,
    disbursementInventoryUi: disbursementInventoryReducer,
    comboOfferUi: ComboOfferReducer,
}

