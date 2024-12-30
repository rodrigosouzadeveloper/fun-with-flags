"use client";
import { createContext, useEffect, useState } from "react";
import { Country } from "../@types/country";
import { countriesApi } from "../services";

type FlagsContextType = {
  loading: boolean;
  error: string | null;
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
};

const FlagsContext = createContext({
  loading: true,
  error: null,
  countries: [],
  setCountries: () => {},
  setError: () => {},
  setLoading: () => {},
} as FlagsContextType);

export const FlagsProvider = ({ children }: { children: React.ReactNode }) => {
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
    <FlagsContext.Provider
      value={{ loading, error, countries, setCountries, setError, setLoading }}
    >
      {children}
    </FlagsContext.Provider>
  );
};
export default FlagsContext;
