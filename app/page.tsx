import { Countries } from "./components";
import { CountriesProvider } from "./contexts/CountriesContext";

export default function Home() {
  return (
    <CountriesProvider>
      <Countries />
    </CountriesProvider>
  );
}
