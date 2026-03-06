import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type SkillPropsType = {
    title: string

}

export const Skill = ({title}: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={title}/>
            <SkillTitle>{title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`

const SkillTitle = styled.h3`
`

