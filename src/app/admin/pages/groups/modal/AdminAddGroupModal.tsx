import FormComponent from "src/common/components/FormComponent"
import { AdminAddGroupStructure } from "../structures/AdminAddGroupStructure"

export const AdminAddGroupModal = () => {
    return (
        <>
            <FormComponent {...AdminAddGroupStructure()} />
        </>
    )
}