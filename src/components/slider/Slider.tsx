import styled from "styled-components";
import user from '../../assets/images/user-1.jpg'
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Photo src={user}/>
                    <Text>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</Text>
                    <Name>Name</Name>
                    <Position>CEO</Position>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid red;
    max-width: 900px;
    margin: 0 auto;
`

const Slide = styled.div`
   
`

const Photo = styled.img`
`
const Text = styled.p`
`
const Name = styled.h3`
`
const Position = styled.span`
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 57px;
        height: 16px;
        margin: 5px;
        background-color: #ef319b;
    }
`

