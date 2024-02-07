import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import { OnDeleteCurrencyModalDeleteEvent } from '../../pages/currency/structures/AdminDeleteCurrencyEventStructure'
import { OnDeleteCustomerModalDeleteEvent } from '../../pages/customers/structures/AdminDeleteCustomerEventStructure'
import {
    OnDeleteProductModalDeleteEvent,
    OnEditProductModalCloseEvent
} from '../../pages/products/modal/AdminEditProductModalEvents'

export const AdminModalEventsStructure = {
    onEditProductModalClose: OnEditProductModalCloseEvent,
    onDeleteProductModalDelete: OnDeleteProductModalDeleteEvent,
    onEditComboOfferModalClose: OnEditComboOfferModalCloseEvent,
    onDeleteCustomerModalDelete: OnDeleteCustomerModalDeleteEvent,
    onDeleteCurrencyModalDelete: OnDeleteCurrencyModalDeleteEvent
}
