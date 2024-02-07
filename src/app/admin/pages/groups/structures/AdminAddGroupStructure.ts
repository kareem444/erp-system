import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminGroupsInputsStructure } from "./AdminGroupsInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { IAdminGroupInputs } from "../interfaces/AdminGroupsInterface";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminGroupsRepo } from "../repo/AdminGroupsRepo";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddGroupStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { createOperation } = useCrudHandler<IAdminGroupModel>('groups')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminGroupsRepo.createGroup(data),
            options: {
                onSuccess(id: number, param: IAdminGroupInputs) {
                    createOperation({ groupname: param.groupname, active: false, id })
                    showNotification('Item group added successfully')
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some thing went wrong', 'error')
                }
            }
        })

        
        const handelOnSubmit = (data: IAdminGroupInputs) => {
            mutate(data);
        }

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: "fi-rr-plus",
            isLoading
        };

        const defaultValues: IAdminGroupInputs = {
            groupname: '',
        };

        return {
            inputs: AdminGroupsInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
