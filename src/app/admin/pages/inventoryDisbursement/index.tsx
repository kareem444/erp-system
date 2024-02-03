import AddInventoryPermission from "./features/AddInventoryPermission"
import InventoryPermissionHistory from "./features/InventoryPermissionHistory"


function ProductsPage() {
    return (
        <>
        <AddInventoryPermission />
        <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
        <InventoryPermissionHistory />
        </>
    )
}

export default ProductsPage