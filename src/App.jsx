import Landing from "./assets/components/LandingPage"
import SecondPage from "./assets/components/SecondPage"
import ThirdPage from "./assets/components/ThirdPage"
import { ContextProvider } from './assets/components/context';

export default function App() {

  return (
    <ContextProvider>
      <Landing />
      <SecondPage />
      <ThirdPage />
    </ContextProvider>
  )
}


