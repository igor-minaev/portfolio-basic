import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper flexDirection="column" alignItems="center">
                <Logo/>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="facebook" width="33" height="33" viewBox="0 0 33 33"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="twitter" width="33" height="33" viewBox="0 0 33 33"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="instagram" width="33" height="33" viewBox="0 0 33 33"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" width="33" height="33" viewBox="0 0 33 33"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 <span>FawziUiUx</span> All Rights Reserved , Inc.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #7c7a7a;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`

const SocialLink = styled.a`

`

const SocialItem = styled.li`
`

const Copyright = styled.small`
    
`


