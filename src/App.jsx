import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
