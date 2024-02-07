import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminCurrencyRepo } from "../repo/AdminCurrencyRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"
import { IAdminCurrencyModel } from "src/app/admin/models/AdminCurrencyModel"

export const OnDeleteCurrencyModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedCurrency } = useEchoState<IAdminCurrencyModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminCurrencyModel>('currency')

    const { mutate } = useMutate({
        queryFn: () => AdminCurrencyRepo.deleteCurrency(selectedCurrency.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedCurrency)
                showNotification('Currency deleted successfully')
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
