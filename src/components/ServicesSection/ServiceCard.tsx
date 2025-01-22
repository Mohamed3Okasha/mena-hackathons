interface Option {
  id: number;
  text: string;
}

interface ServiceCardProps {
  headline: string;
  options: Option[];
  cost: string;
}

export  function ServiceCard({ headline, options, cost }: ServiceCardProps){
  return (
    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col gap-7 justify-between max-w-sm">
      <p className="text-primary text-lg font-semibold">{headline}</p>
      <ul className="space-y-5 h-full">
        {options.map((option) => (
          <li key={option.id} className="flex items-center space-x-3">
            <div className="w-4 h-4 flex justify-center items-center rounded-full border-[1px] border-primary">
              <span className="text-primary text-xs">✓</span>
            </div>
            <p className="text-white text-sm">{option.text}</p>
          </li>
        ))}
      </ul>
      <p className={`border-2 border-primary rounded p-3 text-primary font-bold	text-xl`}>{cost}</p>
    </div>
  );
};
