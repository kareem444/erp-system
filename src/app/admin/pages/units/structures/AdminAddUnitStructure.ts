import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { TRANSLATE } from 'src/common/constants/translateConstants';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminUnitsInputsStructure } from './AdminUnitInputsStructure';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import { IUnitInputs } from '../interfaces/UnitInterface';
import { IUnitModel } from 'src/app/admin/models/UnitModel';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { AdminUnitsRepo } from '../repo/UnitRepo';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminAddUnitStructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { createOperation } = useCrudHandler<IUnitModel>('units');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminUnitsRepo.createUnit(data),
    options: {
      onSuccess(id: number, param: IUnitInputs) {
        createOperation({ ...param, active: false, id });
        showNotification('Unit added successfully');
      },
      onError(formattedError) {
        showNotification(formattedError?.message ?? 'Some thing went wrong', 'error');
      },
    },
  });

  const handelOnSubmit = (data: IUnitInputs) => mutate(data);

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.ADD),
    icon: 'fi-rr-plus',
    isLoading,
  };

  const defaultValues: IUnitInputs = {
    unitname: '',
  };

  return {
    inputs: AdminUnitsInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
