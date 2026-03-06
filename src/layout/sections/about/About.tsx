import {SectionTitle} from "../../../components/SectionTitle.tsx";
import photo from '../../../assets/images/photo-5.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper alignItems="center" justifyContent="space-around">
                <Photo src={photo} alt="photo"/>
                <div>
                    <SectionTitle>About Me</SectionTitle>
                    <Text>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet
                        donec
                        morbi convallis pretium. Turpis tempus pharetra</Text>
                    <ul>
                        <li>
                            <h3>UX</h3>
                            <progress max='100' value='80'/>
                        </li>
                        <li>
                            <h3>Website Design</h3>
                            <progress max='100' value='75'/>
                        </li>
                        <li>
                            <h3>App Design </h3>
                            <progress max='100' value='90'/>
                        </li>
                        <li>
                            <h3>Graphic Design </h3>
                            <progress max='100' value='80'/>
                        </li>
                    </ul>
                </div>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-color: rgba(183, 251, 127, 0.89);
    min-height: 100vh;
`

const Text = styled.p`
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
