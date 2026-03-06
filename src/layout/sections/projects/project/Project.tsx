import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Text>{props.text}</Text>
            <Title>{props.title}</Title>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #81eab1;
    max-width: 350px;
    width: 100%;
    padding: 0 27px 0 39px;
`

const Image = styled.img`
    width: 100%;
    height: 489px;
    object-fit: cover;
`

const Text = styled.span`
    display: inline-block;
`
const Title = styled.h3`
`

