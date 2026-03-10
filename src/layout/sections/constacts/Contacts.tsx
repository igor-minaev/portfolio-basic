import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Button} from "../../../components/Button.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Lets Design Together</SectionTitle>
            <SectionDescription>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                Aliquet donec morbi convallis pretium</SectionDescription>
            <FlexWrapper gap="50px">
                <Form>
                    <Field placeholder="Name"/>
                    <Field placeholder="Subject"/>
                    <Field placeholder="Message" as="textarea"/>
                    <Button type="submit">Contact Me</Button>
                </Form>
                <div>Map</div>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #95f1e3;
    min-height: 50vh;
`

const Form = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

`
const Field = styled.input`

`



