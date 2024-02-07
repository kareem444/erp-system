import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminSuppliersInputsStructure } from "./AdminSuppliersInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminSupplierInputs } from "../interfaces/AdminSuppliersInterface";
import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminSuppliersRepo } from "../repo/AdminSuppliersRepo";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddSupplierStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { createOperation } = useCrudHandler<IAdminSupplierModel>('suppliers')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminSuppliersRepo.createSupplier(data),
            options: {
                onSuccess(id: number, param: IAdminSupplierInputs) {
                    createOperation({ ...param, active: false, id })
                    showNotification('Supplier added successfully')
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some thing went wrong', 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminSupplierInputs) => mutate(data);

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-plus",
            isLoading
        };

        const defaultValues: IAdminSupplierInputs = {
            suppliername: '',
            contactname: '',
            personaddress: '',
            emailaddress: '',
            phone1: '',
            phone2: '',
            taxNo: '',
            cno: '',
            maxcredit: 0,
            maxtime: 0,
            intbalance: 0,
            accountno: '',
        };

        return {
            inputs: AdminSuppliersInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
