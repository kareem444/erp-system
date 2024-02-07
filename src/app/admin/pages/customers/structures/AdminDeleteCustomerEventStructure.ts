import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteCustomerModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedCustomer } = useEchoState<IAdminCustomerModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminCustomerModel>('customers')

    const { mutate } = useMutate({
        queryFn: () => AdminCustomersRepo.deleteCustomer(selectedCustomer.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedCustomer)
                showNotification('Customer deleted successfully')
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
