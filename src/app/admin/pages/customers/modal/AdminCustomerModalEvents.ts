import { showNotification } from "src/common/components/ShowNotificationComponent"

export const OnDeleteCustomerModalDeleteEvent = (): {
    click: () => void
} => {
    return {
        click: () => showNotification('deleted')
    }
}
