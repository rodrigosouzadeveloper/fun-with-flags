import { Countries, Footer, Header } from "./components";
import { CountriesProvider } from "./contexts/CountriesContext";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CountriesProvider>
          <Countries />
        </CountriesProvider>
      </main>
      <Footer />
    </>
  );
}
