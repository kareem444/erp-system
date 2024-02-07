import { IFormComponentProperties } from "src/common/components/FormComponent";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminGroupsInputsStructure } from "./AdminGroupsInputsStructure";
import { TRANSLATE } from "src/common/constants/translateConstants";
import { IAdminGroupInputs } from "../interfaces/AdminGroupsInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminGroupsRepo } from "../repo/AdminGroupsRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditGroupStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate();
        const { state: selectedGroup } = useEchoState<IAdminGroupModel>(EchoStateConstants.selectedItem)
        const { closeModal } = useModalReducer()
        const { updateOperation } = useCrudHandler<IAdminGroupModel>('groups')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminGroupsRepo.updateGroup(data),
            options: {
                onSuccess(_, param: IAdminGroupInputs) {
                    updateOperation({ ...selectedGroup, ...param })
                    showNotification('Item group updated successfully')
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error')
                },
            }
        })

        const handelOnSubmit = (data: IAdminGroupInputs) => {
            const handelUpdatedGroupData: any = {
                ...selectedGroup,
                ...data
            }
            delete handelUpdatedGroupData.syncid
            mutate(handelUpdatedGroupData)
        };

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.EDIT),
            icon: "fi-rr-pencil",
            isLoading
        };

        const defaultValues: IAdminGroupInputs = {
            groupname: selectedGroup?.groupname ?? "",
        };

        return {
            inputs: AdminGroupsInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any,
        };
    };
