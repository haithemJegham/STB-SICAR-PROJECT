import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscripton,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLink,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,

  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscripton>
        <FooterSubHeading>
          Rejoignez notre adhésion exclusive pour recevoir les dernières
          nouvelles.
        </FooterSubHeading>
        <FooterSubText>
          Vous pouvez vous désinscrire à tout moment.
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Abonnez-vous</Button>
        </Form>
      </FooterSubscripton>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Plan du site</FooterLinkTitle>
            <FooterLink to="/">Nous connaitre</FooterLink>
            <FooterLink to="Nos-fonds">Nos fonds</FooterLink>
            <FooterLink to="Responsabilité-sociale">
              Responsabilité-sociale
            </FooterLink>
            <FooterLink to="/nos-réalisations">Nos réalisations</FooterLink>
            <FooterLink to="/actualités">Actualités</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
           <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
           
            STB SICAR
          </SocialLogo>
          <WebsiteRights>Haithem Jegham © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.youtube.com/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
