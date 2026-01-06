"use client";

import TeamMember from "@/src/components/TeamMember";

// Placeholder data - replace with actual team data
const executiveBoard = [
  { name: "First Last Name", role: "Role", linkedIn: "#" },
  { name: "First Last Name", role: "Role", linkedIn: "#" },
  { name: "First Last Name", role: "Role", linkedIn: "#" },
];

const electricalTeam = {
  lead: { name: "First Last Name", role: "Electrical Lead", linkedIn: "#" },
  members: [
    { name: "First Last Name", role: "Role", linkedIn: "#" },
    { name: "First Last Name", role: "Role", linkedIn: "#" },
    { name: "First Last Name", role: "Role", linkedIn: "#" },
    { name: "First Last Name", role: "Role", linkedIn: "#" },
  ],
};

const mechanicalTeam = {
  lead: { name: "First Last Name", role: "Mechanical Lead", linkedIn: "#" },
  members: [
    { name: "First Last Name", role: "Role", linkedIn: "#" },
    { name: "First Last Name", role: "Role", linkedIn: "#" },
    { name: "First Last Name", role: "Role", linkedIn: "#" },
    { name: "First Last Name", role: "Role", linkedIn: "#" },
  ],
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Executive Board Section */}
      <section className="py-12 px-8 lg:border-y-6 border-text-yellow">
        <h1 className="text-display md:text-display font-display text-text-blue mb-12">
          Executive Board
        </h1>
        <div className="flex justify-center gap-16 flex-wrap text-black">
          {executiveBoard.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              linkedIn={member.linkedIn}
              size="md"
            />
          ))}
        </div>
      </section>

      {/* Sub-teams Section */}
      <section className="bg-white px-8 border-text-blue lg:border-y-6">
        <div className="flex flex-col lg:flex-row">
          {/* Electrical Team */}
          <div className="flex-1 px-8 py-6 lg:border-r-6 border-text-yellow">
            <h2 className="text-display font-display text-text-blue mb-6">
              Electrical
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <p className="text-subheading font-body text-black flex-1 max-w-sm">
                The work of the electrical team encompasses the bike’s low and high-voltage systems. 
                Our high-voltage work includes designing and fabricating our custom battery packs, ensuring 
                the bike is able to meet racing-level specs. The low-voltage side includes designing 
                custom peripherals like our dashboard, while regulating power across the bike’s other 
                accessories. The substantial number of software, hardware, and mechanical components 
                within the electrical subsystem makes the electrical team a particularly interdisciplinary 
                and exciting group to be a part of.
              </p>
              <div className="flex-shrink-0">
                <TeamMember
                  name={electricalTeam.lead.name}
                  role={electricalTeam.lead.role}
                  linkedIn={electricalTeam.lead.linkedIn}
                  size="md"
                />
              </div>
            </div>
            <div className="flex justify-start gap-8 mt-8 flex-wrap">
              {electricalTeam.members.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Mechanical Team */}
          <div className="flex-1 px-8 py-6 lg:border-l-6 border-text-blue">
            <h2 className="text-display font-display text-text-blue mb-6">
              Mechanical
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <p className="text-subheading font-body text-black flex-1 max-w-sm">
                This is our mechanical team. They are responsible for blah blah
                blah etc etc. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh
              </p>
              <div className="flex-shrink-0">
                <TeamMember
                  name={mechanicalTeam.lead.name}
                  role={mechanicalTeam.lead.role}
                  linkedIn={mechanicalTeam.lead.linkedIn}
                  size="md"
                />
              </div>
            </div>
            <div className="flex justify-start gap-8 mt-8 flex-wrap">
              {mechanicalTeam.members.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  size="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}