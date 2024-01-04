import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/translateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddTaxFeatureFormStructure } from '../structures/AdminAddTaxStructure'

export default function AddTaxFeature() {
    const { titleWithoutLetterES } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <CollapseComponent title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterES}`}>
            <FormComponent {...AdminAddTaxFeatureFormStructure()} />
        </CollapseComponent>
    )
}
