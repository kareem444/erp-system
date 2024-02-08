import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminSuppliersInputsStructure } from "./AdminSuppliersInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminSupplierInputs } from "../interfaces/AdminSuppliersInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminSuppliersRepo } from "../repo/AdminSuppliersRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditSupplierStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { state: selectedSupplier } = useEchoState<IAdminSupplierModel>(EchoStateConstants.selectedItem)
        const { closeModal } = useModalReducer()
        const { updateOperation } = useCrudHandler<IAdminSupplierModel>('suppliers')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminSuppliersRepo.updateSupplier(data),
            options: {
                onSuccess(_, param: IAdminSupplierInputs) {
                    updateOperation({ ...selectedSupplier, ...param })
                    showNotification('Supplier updated successfully')
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error')
                },
            }
        })

        const handelOnSubmit = (data: IAdminSupplierInputs) => mutate({ ...selectedSupplier, ...data } as any)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.EDIT),
            icon: "fi-rr-pencil",
            isLoading
        };

        const defaultValues: IAdminSupplierInputs = {
            suppliername: selectedSupplier?.suppliername ?? "",
            contactname: selectedSupplier?.contactname ?? "",
            personaddress: selectedSupplier?.personaddress ?? "",
            emailaddress: selectedSupplier?.emailaddress ?? "",
            phone1: selectedSupplier?.phone1 ?? "",
            phone2: selectedSupplier?.phone2 ?? "",
            taxNo: selectedSupplier?.taxNo ?? "",
            cno: selectedSupplier?.cno ?? "",
            maxcredit: selectedSupplier?.maxcredit ?? 0,
            maxtime: selectedSupplier?.maxtime ?? 0,
            intbalance: selectedSupplier?.intbalance ?? 0,
            accountno: selectedSupplier?.accountno ?? "",
        };

        return {
            inputs: AdminSuppliersInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
