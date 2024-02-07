export interface IAdminSupplierModel {
    id?: number
    active: boolean
    createdAt?: Date
    updatedAt?: Date
    suppliername: string
    contactname: string
    personaddress: string
    emailaddress: string
    phone1: string
    phone2: string
    taxNo: string
    cno: string
    maxcredit: number
    maxtime: number
    intbalance: number
    accountno: string
}