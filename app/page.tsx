import { Footer, Header } from "./components";
import Flags from "./components/Flags";
import { FlagsProvider } from "./contexts/flagsContext";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <FlagsProvider>
          <Flags />
        </FlagsProvider>
      </main>
      <Footer />
    </>
  );
}
