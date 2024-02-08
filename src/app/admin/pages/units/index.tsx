import AdminAddAndSearchUnitFeature from "./features/AddUnitFeature"
import UnitsDetailsFeature from "./features/AdminUnitsDetailsFeature"

function UnitsPage() {
    return (
        <>
            <AdminAddAndSearchUnitFeature />
            <UnitsDetailsFeature />
        </>
    )
}

export default UnitsPage