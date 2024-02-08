import AddProductFeature from "./features/AddProductFeature"
import InventoryPermissionHistory from "./features/InventoryPermissionHistory"

function ProductsPage() {
    return (
        <>
            <AddProductFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <InventoryPermissionHistory />
        </>
    )
}

export default ProductsPage