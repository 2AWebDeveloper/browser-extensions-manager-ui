import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import ToolBar from "./components/ToolBar";
import ExtensionsList from "./components/ExtensionsList";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main>
        <ToolBar />
        <ExtensionsList />
      </Main>
    </ThemeProvider>
  );
}
