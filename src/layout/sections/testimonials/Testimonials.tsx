import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <SectionTitle>Testimonials</SectionTitle>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</SectionDescription>
            <Slider/>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    background-color: #f4b280;
    min-height: 80vh;
`