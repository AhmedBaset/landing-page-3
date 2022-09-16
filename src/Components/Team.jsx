import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import TeamMember from "./TeamMember";
import data from "./../MembersData";

export default function Team() {
	return (
		<Section bgImage={true}>
			<div className="grid-span-12">
				<SectionTitle title={'Meet Our \n Creative Team Members'} />
			</div>
			<div className="grid-span-12 grid-3 gap">
         { data &&
         data.map((member) => (
            <TeamMember 
               key={member.name}
               image={member.image}
               name={member.name}
               job={member.job}
            />
         ))
         }
         </div>
		</Section>
	);
}
