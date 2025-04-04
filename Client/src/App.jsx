import AppRoute from "./routes/AppRoute";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
