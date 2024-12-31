import Link from "next/link";

type BorderItemProps = {
  borderId: string;
};

const BorderItem = ({ borderId }: BorderItemProps) => {
  return (
    <Link key={borderId} href={`/country/${borderId}`}>
      <button className="bg-gray-200 hover:bg-gray-300 mb-2 mr-1 p-1 rounded text-xs">
        {borderId}
      </button>
    </Link>
  );
};

export default BorderItem;
