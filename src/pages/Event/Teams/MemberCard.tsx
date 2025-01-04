import { TeamMember } from "./types";

export function MemberCard({ photoUrl, name, role, position }: TeamMember) {
  return (
    <div
      className="flex flex-col gap-3 bg-card rounded-lg shadow-md p-6 flex flex-col items-center"
    >
      <div className="w-20 h-20 rounded-full mb-2">
        {photoUrl && (
          <img
            src={photoUrl}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        )}
        <p className={`text-xs`}>({role})</p>
      </div>
      <h3 className="">
        {name} <span className="text-xs text-primary">(you)</span>
      </h3>
      <p className="text-sm text-primary">{position}</p>
    </div>
  )
}