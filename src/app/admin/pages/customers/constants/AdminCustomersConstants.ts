import { IInputsConstants } from "src/common/interfaces/InputsInterface";
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface";

export const AdminCustomerInputsConstants: IInputsConstants<IAdminCustomerInputs> = {
    customername: 'customername',
    contactname: 'contactname',
    personaddress: 'personaddress',
    emailaddress: 'emailaddress',
    phone1: 'phone1',
    phone2: 'phone2',
    taxno: 'taxno',
    cno: 'cno',
    maxcredit: 'maxcredit',
    maxtime: 'maxtime',
    intbalance: 'intbalance',
    accountno: 'accountno',
}