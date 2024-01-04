import { TRANSLATE } from '../constants/translateConstants'
import { useTranslate } from '../hooks/useTranslate'

export default function SwitchLanguageComponent() {
    const { toggleEnAr, translate, isArabic } = useTranslate()

    return (
        <label
            className='swap pointer-events-auto border rounded-full w-12 mt-2'
            onClick={toggleEnAr}
        >
            <div className={`m-auto ${isArabic && 'mb-1'}`}>
                {isArabic ? translate(TRANSLATE.AR) : translate(TRANSLATE.EN)}
            </div>
        </label>
    )
}
