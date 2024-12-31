"use client";
import Image from "next/image";
import CountryInfo from "./CountryInfo";
import Link from "next/link";
import BorderItem from "./BorderItem";
import { useContext } from "react";
import CountryContext from "../contexts/CountryContext";

const Country = () => {
  const { country, error, loading, id } = useContext(CountryContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!country) {
    return <div>Country not found</div>;
  }

  const {
    flags,
    name,
    capital,
    region,
    population,
    languages,
    currencies,
    tld,
    borders,
  } = country;
  const { svg: flag } = flags;
  const { common: countryName } = name;
  const [capitalName] = capital;
  const languagesNames = Object.values(languages ?? {}).join(", ");
  const currenciesNames = Object.values(currencies ?? {})
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(", ");
  const [topLevelDomain] = tld ?? [];
  const bordersIds = borders ?? [];

  return (
    <>
      <div className="mb-8">
        <Link href="/">
          <button className="bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded">
            Back
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
        <div className="flex items-center md:max-w-[400px]">
          <Image
            src={flag || "/flag-placeholder.svg"}
            className="max-h-80 object-cover rounded-lg"
            alt={`Flag of ${countryName}`}
            width={500}
            height={300}
            priority
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-sm text-gray-600">
          <h2 className="text-xl font-semibold mb-4">
            {countryName} ({id})
          </h2>
          <div className="space-y-2">
            <CountryInfo label="Capital" value={capitalName} />
            <CountryInfo label="Region" value={region} />
            <CountryInfo label="Population" value={population} />
            <CountryInfo label="Languages" value={languagesNames} />
            <CountryInfo label="Currencies" value={currenciesNames} />
            <CountryInfo label="Top Level Domain" value={topLevelDomain} />
            <div className="md:max-w-80">
              <span className="font-semibold">Borders:</span>{" "}
              {bordersIds.length > 0
                ? bordersIds.map((borderId) => (
                    <BorderItem key={borderId} borderId={borderId} />
                  ))
                : "None"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
