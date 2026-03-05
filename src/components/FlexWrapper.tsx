import styled from "styled-components";

type FlexWrapperPropsType = {
    flexDirection?: string
    alignItems?: string
    justifyContent?: string
    flexWrap?: string
    gap?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: ${props => props.alignItems || "stretch"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    flex-wrap: ${props => props.flexWrap || "nowrap"};
    gap: ${props => props.gap || "0"};
`