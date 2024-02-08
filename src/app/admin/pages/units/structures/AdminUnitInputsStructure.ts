import { InputComponentProps } from 'src/common/components/InputComponent';
import { TRANSLATE } from 'src/common/constants/translateConstants';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { UnitInputsConstants } from '../constants/AdminUnitInputsConstants';

export const AdminUnitsInputsStructure = (isEditModal = false): InputComponentProps[] => {
  const { translate } = useTranslate();

  return [
    {
      labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
      containerStyle: 'col-span-12',
      validatedInput: {
        name: UnitInputsConstants.unitname,
        rules: {
          isRequired: true,
        },
      },
    },
  ];
};
