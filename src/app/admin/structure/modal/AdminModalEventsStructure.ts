import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import { OnDeleteCurrencyModalDeleteEvent } from '../../pages/currency/structures/AdminDeleteCurrencyEventStructure'
import { OnDeleteCustomerModalDeleteEvent } from '../../pages/customers/structures/AdminDeleteCustomerEventStructure'
import {
  OnDeleteProductModalDeleteEvent,
  OnEditProductModalCloseEvent,
} from '../../pages/products/modal/AdminEditProductModalEvents';
import { OnDeleteUnitModalDeleteEvent } from '../../pages/units/structures/AdminDeleteUnitEventStructure';


export const AdminModalEventsStructure = {
  onEditProductModalClose: OnEditProductModalCloseEvent,
  onDeleteProductModalDelete: OnDeleteProductModalDeleteEvent,
  onEditComboOfferModalClose: OnEditComboOfferModalCloseEvent,
  onDeleteCustomerModalDelete: OnDeleteCustomerModalDeleteEvent,
  onDeleteCurrencyModalDelete: OnDeleteCurrencyModalDeleteEvent,
  onDeleteUnitModalDelete: OnDeleteUnitModalDeleteEvent,
};
