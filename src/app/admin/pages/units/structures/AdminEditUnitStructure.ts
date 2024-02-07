import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminUnitsInputsStructure } from './AdminUnitInputsStructure';
import { TRANSLATE } from 'src/common/constants/translateConstants';
import { IUnitInputs } from '../interfaces/UnitInterface';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { IUnitModel } from 'src/app/admin/models/UnitModel';
import useModalReducer from 'src/common/redux/modal/useModalReducer';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminUnitsRepo } from '../repo/UnitRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminEditUnitStructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { state: selectedCustomer } = useEchoState<IUnitModel>(EchoStateConstants.selectedItem);
  const { closeModal } = useModalReducer();
  const { updateOperation } = useCrudHandler<IUnitModel>('units');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminUnitsRepo.updateUnit(data),
    options: {
      onSuccess(_, param: IUnitInputs) {
        updateOperation({ ...selectedCustomer, ...param });
        showNotification('Unit updated successfully');
        closeModal();
      },
      onError(formattedError) {
        showNotification(formattedError?.message ?? 'Some Thing Went Wrong', 'error');
      },
    },
  });

  const handelOnSubmit = (data: IUnitInputs) => {
    const handelUpdatedCustomerData: any = {
      ...selectedCustomer,
      ...data,
    };
    delete handelUpdatedCustomerData.syncid;
    mutate(handelUpdatedCustomerData);
  };

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.EDIT),
    icon: 'fi-rr-pencil',
    isLoading,
  };

  const defaultValues: IUnitInputs = {
    unitname: selectedCustomer?.unitname ?? '',
  };

  return {
    inputs: AdminUnitsInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
