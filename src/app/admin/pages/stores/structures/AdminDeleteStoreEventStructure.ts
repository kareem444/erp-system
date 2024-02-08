import { IAdminStoreModel } from "src/app/admin/models/AdminStoreModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminStoresRepo } from "../repo/AdminStoresRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteStoreModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedStore } = useEchoState<IAdminStoreModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminStoreModel>('stores')

    const { mutate } = useMutate({
        queryFn: () => AdminStoresRepo.deleteStore(selectedStore.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedStore)
                showNotification('Store deleted successfully')
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
