"use client";
import { createContext, useEffect, useState } from "react";
import { Country } from "../types/country";
import { countriesApi } from "../services";

type CountriesContextType = {
  loading: boolean;
  error: string | null;
  countries: Country[];
};

const CountriesContext = createContext({
  loading: true,
  error: null,
  countries: [],
} as CountriesContextType);

export const CountriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const [response, error] = await countriesApi.getAll();
      setLoading(false);
      if (error) {
        setError(error);
        return;
      }
      const sortedCounries = response.sort((a: Country, b: Country) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        return nameA.localeCompare(nameB);
      });
      setCountries(sortedCounries);
    };
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ loading, error, countries }}>
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesContext;
