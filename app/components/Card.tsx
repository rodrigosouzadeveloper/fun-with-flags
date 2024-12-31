import Image from "next/image";
import CountryInfo from "./CountryInfo";

type CardProps = {
  index: number;
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
};

const Card = ({
  index,
  flag,
  name,
  capital,
  region,
  population,
}: CardProps) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video w-full">
        <Image
          src={flag || "/flag-placeholder.svg"}
          className="w-full h-full object-cover"
          alt={`Flag of ${name}`}
          width={500}
          height={300}
          priority={index < 12}
        />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="text-xl font-semibold mb-4">{name}</h2>
        <div className="space-y-2">
          <CountryInfo label="Capital" value={capital} />
          <CountryInfo label="Region" value={region} />
          <CountryInfo label="Population" value={population} />
        </div>
      </div>
    </div>
  );
};

export default Card;
