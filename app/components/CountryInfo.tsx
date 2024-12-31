type CountryInfoProps = {
  label: string;
  value: string | number;
};

const CountryInfo = ({ label, value }: CountryInfoProps) => {
  return (
    <div>
      <span className="font-semibold">{label}:</span> {value}
    </div>
  );
};

export default CountryInfo;
