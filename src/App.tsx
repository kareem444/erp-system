import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import RoutesContainer from './common/routes';
import { useTranslate } from './common/hooks/useTranslate';
import useModalReducer from './common/redux/modal/useModalReducer';

function App() {
  const { dir } = useTranslate()
  const { state, closeModal } = useModalReducer()

  useEffect(() => {
    document.body.dir = dir
  }, [dir])

  useEffect(() => {
    // 👆 daisy UI themes initialization
    if (document.querySelector('html')?.getAttribute('data-theme') === null) {
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'winter')
      }
      document.querySelector('html')?.setAttribute('data-theme', localStorage.getItem('theme') || 'winter')
    }
    themeChange(false)
  }, [])

  useEffect(() => {
    const handleBackButton = (event: any) => {
      event.preventDefault();
      if (state.isOpen) {
        closeModal()
        window.history.forward();
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [state.isOpen])

  return (
    <RoutesContainer />
  )
}

export default App
