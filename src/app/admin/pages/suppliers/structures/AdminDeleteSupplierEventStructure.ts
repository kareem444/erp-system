import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminSuppliersRepo } from "../repo/AdminSuppliersRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteSupplierModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedSupplier } = useEchoState<IAdminSupplierModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminSupplierModel>('suppliers')

    const { mutate } = useMutate({
        queryFn: () => AdminSuppliersRepo.deleteSupplier(selectedSupplier.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedSupplier)
                showNotification('Supplier deleted successfully')
            },
            onError() {
                showNotification('Something went wrong', 'error')
            }
        }
    })

    return {
        click: () => mutate()
    }
}
