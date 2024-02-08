import FormComponent from "src/common/components/FormComponent"
import { AdminAddStoreStructure } from "../structures/AdminAddStoreStructure"

export const AdminAddStoreModal = () => {
    return (
        <>
            <FormComponent {...AdminAddStoreStructure()} />
        </>
    )
}