import FormComponent from "src/common/components/FormComponent"
import { AdminAddUnitStructure } from "../structures/AdminAddUnitStructure"

export const AdminAddUnitModal = () => {
    return (
        <>
            <FormComponent {...AdminAddUnitStructure()} />
        </>
    )
}