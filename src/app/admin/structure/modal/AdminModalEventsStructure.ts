import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import { OnDeleteCustomerModalDeleteEvent } from '../../pages/customers/structures/AdminDeleteCustomerEventStructure'
import { OnDeleteGroupModalDeleteEvent } from '../../pages/groups/structures/AdminDeleteGroupEventStructure'
import { OnDeleteStoreModalDeleteEvent } from '../../pages/stores/structures/AdminDeleteStoreEventStructure'
import { OnDeleteSupplierModalDeleteEvent } from '../../pages/suppliers/structures/AdminDeleteSupplierEventStructure'

import {
    OnDeleteProductModalDeleteEvent,
    OnEditProductModalCloseEvent
} from '../../pages/products/modal/AdminEditProductModalEvents'

export const AdminModalEventsStructure = {
    onEditProductModalClose: OnEditProductModalCloseEvent,
    onDeleteProductModalDelete: OnDeleteProductModalDeleteEvent,
    onEditComboOfferModalClose: OnEditComboOfferModalCloseEvent,
    onDeleteCustomerModalDelete: OnDeleteCustomerModalDeleteEvent,
    onDeleteGroupModalDelete: OnDeleteGroupModalDeleteEvent,
    onDeleteStoreModalDelete: OnDeleteStoreModalDeleteEvent,
    onDeleteSupplierModalDelete: OnDeleteSupplierModalDeleteEvent,
    
}
