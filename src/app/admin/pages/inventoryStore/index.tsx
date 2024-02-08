import InventorySelector from "./features/InventorySelector"
import AdditionsDetailsFeature from "./features/AdditionsDetailsFeature"

function AdditionsPage() {
    return (
        <>
            <InventorySelector />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <AdditionsDetailsFeature />
        </>
    )
}

export default AdditionsPage