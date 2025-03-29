import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import ToolBar from "./components/ToolBar";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main>
        <ToolBar />
      </Main>
    </ThemeProvider>
  );
}
