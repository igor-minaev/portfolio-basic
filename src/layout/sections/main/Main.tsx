import photo from '../../../assets/images/photo-4.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems="center" justifyContent="space-around">
                <div>
                    <span>Hi I am </span>
                    <Name>Ihar Minayeu</Name>
                    <MainTitle>Frontend Developer</MainTitle>
                    <Text>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet
                        donec morbi convallis pretium. Turpis tempus pharetra</Text>
                    <button>Hire Me</button>
                </div>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #eaa4f6;
    min-height: 100vh;
`

const MainTitle = styled.h1`
`

const Name = styled.h2`
`

const Text = styled.p`
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

