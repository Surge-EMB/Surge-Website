"use client";

import TeamMember from "@/src/components/TeamMember";

// Placeholder data - replace with actual team data
const executiveBoard = [
  { name: "Sid Mandava", role: "President", linkedIn: "https://www.linkedin.com/in/sid-mandava-102828279/", imageSrc: "/images/team/sidMandava.jpg"},
];

const electricalTeam = {
  lead: { name: "Colin O'Brien", role: "Electrical Lead", linkedIn: "https://www.linkedin.com/in/colin-o-brien-bb27a1214/", imageSrc:  "/images/team/colinOBrien.jpg"},
  members: [
    { name: "Evelyn Chuang", role: "High Voltage", linkedIn: "http://www.linkedin.com/in/evelyn-chuang", imageSrc: "/images/team/evelynChuang1.jpg"},
    { name: "Ansh Thakkar", role: "Low Voltage", linkedIn: "https://www.linkedin.com/in/ansh-thakkar/", imageSrc: "/images/team/anshThakkar.jpg"}
  ],
};

const mechanicalTeam = {
  lead: { name: "Alain Garnica", role: "Mechanical Lead", linkedIn: "https://www.linkedin.com/in/alaingarnica/", imageSrc: "/images/team/alainGarnica.JPG" },
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
              imageSrc={member.imageSrc}
              size="md"
            />
          ))}
        </div>
      </section>

      {/* Sub-teams Section */}
      <section className="bg-white px-8 border-text-blue lg:border-y-6">
        <div className="flex flex-col lg:flex-row">
          {/* Electrical Team */}
          <div className="flex-1 px-8 py-6 lg:border-r-6 border-text-yellow flex flex-col">
            <h2 className="text-display font-display text-text-blue mb-6">
              Electrical
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start mb-auto">
              <p className="text-subheading font-body text-black flex-1 max-w-sm">
                The Electrical subteam is responsible for the motorcycle’s high-voltage and 
                low-voltage systems. On the high-voltage side, the team designs and 
                manufactures the battery pack from the cell level up, including charging, 
                balancing, and integration with the powertrain to meet performance and 
                reliability requirements. The low-voltage system supports data, sensing, control, 
                and logging across the bike, including the design of custom electronics such as the dashboard. 
                The Electrical subteam works closely with mechanical and software teams to ensure robust system 
                integration and dependable operation.
              </p>
              <div className="flex-shrink-0">
                <TeamMember
                  name={electricalTeam.lead.name}
                  role={electricalTeam.lead.role}
                  linkedIn={electricalTeam.lead.linkedIn}
                  imageSrc={electricalTeam.lead.imageSrc}
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
                  imageSrc={member.imageSrc}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Mechanical Team */}
          <div className="flex-1 px-8 py-6 lg:border-l-6 border-text-blue flex flex-col">
            <h2 className="text-display font-display text-text-blue mb-6">
              Mechanical
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start mb-auto">
              <p className="text-subheading font-body text-black flex-1 max-w-sm">
                The Mechanical subteam is responsible for the design and integration of the motorcycle’s 
                core structural systems. For the current conversion project, the team works from a stripped 
                production frame and designs all required components, including motor mounts, battery mounts, 
                subframe structures, and drivetrain elements such as sprockets. Manufacturing is done in-house 
                using standard metals, with rapid prototyping through 3D printing, laser cutting, and waterjet 
                fabrication. As the team moves toward future projects, the Mechanical subteam will lead full 
                chassis and frame design, overseeing the mechanical integrity and layout of the motorcycle as a 
                complete system.
              </p>
              <div className="flex-shrink-0">
                <TeamMember
                  name={mechanicalTeam.lead.name}
                  role={mechanicalTeam.lead.role}
                  linkedIn={mechanicalTeam.lead.linkedIn}
                  imageSrc={mechanicalTeam.lead.imageSrc}
                  size="md"
                />
              </div>
            </div>
            <div className="flex justify-start gap-8 mt-8 flex-wrap">
              {/* Commented out until we get headshots and name permission */}
              {/* {mechanicalTeam.members.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  size="sm"
                />
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}