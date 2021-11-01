import { GlobalStyle } from "./styles/global";
import { Routes } from "./Routes";
import { ModulesProvider } from "./hooks/useModules";
import { UserProvider } from "./hooks/useUser";
import { LessonProvider } from "./hooks/useLesson";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <ModulesProvider>
        <UserProvider>
          <LessonProvider>
            <Routes />
          </LessonProvider>
        </UserProvider>
      </ModulesProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
