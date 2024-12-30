import { Card, Footer, Grid, Header } from "./components";

const countries = [
  {
    id: 1,
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: "213993437",
  },
  {
    id: 2,
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: "125800000",
  },
  {
    id: 3,
    country: "United States",
    capital: "Washington, D.C.",
    region: "North America",
    population: "331893745",
  },
  {
    id: 4,
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: "83190556",
  },
  {
    id: 5,
    country: "India",
    capital: "New Delhi",
    region: "Asia",
    population: "1406631000",
  },
  {
    id: 6,
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "26078748",
  },
  {
    id: 7,
    country: "South Africa",
    capital: "Pretoria",
    region: "Africa",
    population: "60142978",
  },
  {
    id: 8,
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: "38454327",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({ id, country, capital, region, population }) => (
            <Card
              key={id}
              country={country}
              capital={capital}
              region={region}
              population={population}
            />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
