import React from 'react';



import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>connect with</LinkTitle>
          <LinkItem href="https://www.pramit.site/">pramit.site</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mondalpramit76@gmail.com">
            mondalpramit76@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>      @PramitMondal | 2023 </Slogan>

        </CompanyContainer>

      </SocialIconsContainer>
    </FooterWrapper >
  );
};

export default Footer;
