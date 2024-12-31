"use client";
import { Country } from "@/app/components";
import { CountryProvider } from "@/app/contexts/CountryContext";

export default function CountryPage() {
  return (
    <CountryProvider>
      <Country />
    </CountryProvider>
  );
}
