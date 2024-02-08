import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminUnitsInputsStructure } from './AdminUnitInputsStructure';
import { TRANSLATE } from 'src/common/constants/translateConstants';
import { IAdminUnitInputs } from '../interfaces/AdminUnitInterface';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { IAdminUnitModel } from 'src/app/admin/models/AdminUnitModel';
import useModalReducer from 'src/common/redux/modal/useModalReducer';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminUnitsRepo } from '../repo/AdminUnitRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminEditUnitStructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { state: selectedUnit } = useEchoState<IAdminUnitModel>(EchoStateConstants.selectedItem);
  const { closeModal } = useModalReducer();
  const { updateOperation } = useCrudHandler<IAdminUnitModel>('units');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminUnitsRepo.updateUnit(data),
    options: {
      onSuccess(_, param: IAdminUnitInputs) {
        updateOperation({ ...selectedUnit, ...param });
        showNotification('Unit updated successfully');
        closeModal();
      },
      onError(formattedError) {
        showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error');
      },
    },
  });

  const handelOnSubmit = (data: IAdminUnitInputs) => mutate({ ...selectedUnit, ...data });

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.EDIT),
    icon: 'fi-rr-pencil',
    isLoading,
  };

  const defaultValues: IAdminUnitInputs = {
    unitname: selectedUnit?.unitname ?? '',
  };

  return {
    inputs: AdminUnitsInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
