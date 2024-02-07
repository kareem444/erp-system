import { IInputsConstants } from "src/common/interfaces/InputsInterface";
import { IAdminSupplierInputs } from "../interfaces/AdminSuppliersInterface";

export const AdminSupplierInputsConstants: IInputsConstants<IAdminSupplierInputs> = {
    suppliername: 'suppliername',
    contactname: 'contactname',
    personaddress: 'personaddress',
    emailaddress: 'emailaddress',
    phone1: 'phone1',
    phone2: 'phone2',
    taxNo: 'taxNo',
    cno: 'cno',
    maxcredit: 'maxcredit',
    maxtime: 'maxtime',
    intbalance: 'intbalance',
    accountno: 'accountno',
}