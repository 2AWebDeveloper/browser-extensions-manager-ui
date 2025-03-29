import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main></Main>
    </ThemeProvider>
  );
}
