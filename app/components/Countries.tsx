"use client";
import { useContext } from "react";
import Grid from "./Grid";
import Card from "./Card";
import FlagsContext from "../contexts/CountriesContext";

const Flags = () => {
  const { loading, error, countries } = useContext(FlagsContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Grid>
      {countries.map(
        ({ cca3, name, capital, region, population, flags }, index) => {
          const { svg: flag } = flags ?? {};
          const { common: countryName } = name ?? {};
          const [capitalName] = capital ?? [];

          return (
            <Card
              key={cca3}
              index={index}
              name={countryName}
              flag={flag}
              capital={capitalName}
              region={region}
              population={population}
            />
          );
        }
      )}
    </Grid>
  );
};

export default Flags;
