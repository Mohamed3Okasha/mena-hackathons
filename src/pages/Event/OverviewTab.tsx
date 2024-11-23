type Section = {
  title: string;
  content: string;
};

type OverviewProps = {
  sections: Section[];
};

export function OverviewTab({ sections }: OverviewProps) {
  return (
    <div className="y-4 space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="text-left ">
          <h2 className="text-lg font-semibold text-primary mb-2">
            {section.title}
          </h2>
          <p className="justify- text-accent">{section.content}</p>
        </div>
      ))}
    </div>
  );
}