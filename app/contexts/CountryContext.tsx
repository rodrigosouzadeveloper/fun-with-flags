"use client";
import { createContext, useEffect, useState } from "react";
import { DetailedCountry } from "../types/country";
import { countriesApi } from "../services";
import { useParams } from "next/navigation";

type Params = {
  id: string;
};

type CountryContextType = {
  id: string | null;
  loading: boolean;
  error: string | null;
  country: DetailedCountry | null;
};

const CountryContext = createContext({
  id: null,
  loading: true,
  error: null,
  country: null,
} as CountryContextType);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const params = useParams<Params>();

  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState<DetailedCountry | null>(null);

  useEffect(() => {
    if (params?.id && params.id !== id) {
      setId(params.id);
    }
  }, [params, id]);

  useEffect(() => {
    const fetchCountries = async () => {
      const [response, error] = await countriesApi.getCountry(id as string);
      setLoading(false);
      if (error) {
        setError(error);
        return;
      }
      setCountry(response);
    };

    if (id) {
      fetchCountries();
    }
  }, [id]);

  return (
    <CountryContext.Provider value={{ loading, error, country, id }}>
      {children}
    </CountryContext.Provider>
  );
};
export default CountryContext;
