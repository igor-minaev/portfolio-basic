import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.Aliquet donec morbi convallis pretium</SectionDescription>
            <GridWrapper>
                <Skill title="html"/>
                <Skill title="css"/>
                <Skill title="tailwind"/>
                <Skill title="js"/>
                <Skill title="react"/>
                <Skill title="redux"/>
                <Skill title="typescript"/>
                <Skill title="pnpm"/>
                <Skill title="vite"/>
                <Skill title="webstorm"/>
                <Skill title="git"/>
                <Skill title="github"/>
            </GridWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #8dcef6;
    min-height: 100vh;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`

