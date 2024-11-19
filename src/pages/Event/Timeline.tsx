import { FaCalendarCheck  , FaCalendarMinus  } from 'react-icons/fa';

type Milestone = {
  milestone: string;
  date: string;
  isPassed?: boolean;
};

type TimelineProps = {
  milestones: Milestone[];
};

export function Timeline({ milestones }: TimelineProps) {
  const currentDate = new Date();

  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => {
        const milestoneDate = new Date(milestone.date);
        const isPassed = milestoneDate < currentDate;

        return (
          <div
            key={index}
            className={`flex items-center space-x-4 ${
              isPassed ? 'opacity-80' : ''
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                isPassed ? 'bg-' : 'bg-'
              }`}
            >
              {isPassed ? <FaCalendarCheck  className={`text-white text-3xl text-bold `} /> : <FaCalendarMinus   className={`text-white text-3xl text-bold `} />}
            </div>
            <div>
              <span className="text-">{milestone.date} | </span>
              <span className="font-">{milestone.milestone}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}