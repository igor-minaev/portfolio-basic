import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import project1 from "../../../assets/images/project-1.webp"
import project2 from "../../../assets/images/project-2.webp"
import project3 from "../../../assets/images/project-3.webp"

const projectItems = ["All", "Landing Page", "react", "spa"]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>My Projects</SectionTitle>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus
                lectus. Phasellus consequat urna tellus</SectionDescription>
            <Menu menuItems={projectItems}/>
            <FlexWrapper justifyContent="space-between">
                <Project src={project1} title="AirCalling Landing Page Design " text="Landing Page"/>
                <Project src={project2} title="Business Landing Page Design " text="react"/>
                <Project src={project3} title="Ecom Web Page Design " text="react"/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #f8f68b;
`

