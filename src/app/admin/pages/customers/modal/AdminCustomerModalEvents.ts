import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo"

export const OnDeleteCustomerModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedCustomer } = useEchoState<IAdminCustomerModel>(EchoStateConstants.selectedItem)
    const { state: allCustomers, setState } = useAsyncState<IAdminCustomerModel[]>(AsyncStateConstants.customers)

    const { mutate } = useMutate({
        queryFn: () => AdminCustomersRepo.deleteCustomer(selectedCustomer.id!),
        options: {
            onSuccess() {
                setState({
                    data: allCustomers?.data?.filter((customer) => customer.id !== selectedCustomer.id),
                })
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
