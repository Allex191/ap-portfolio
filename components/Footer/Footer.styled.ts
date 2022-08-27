import styled from "@emotion/styled";
import { StyledTitleSection } from "styles/StyledReusable.styled";

export const Footer = styled.footer``;

export const FooterTitle = styled(StyledTitleSection)``;

export const FormOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  width: 100%;
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  color: black;
  .leaflet-container {
    height: 400px;
    width: 50%;
    min-width: 300px;
  }
  .leaflet-control-zoom span {
    color: inherit;
  }
  .leaflet-popup-content {
    color: inherit;
  }
  .leaflet-popup-close-button span {
    color: inherit;
  }
`;

export const Form = styled.form`
  color: white;
  input,
  textarea {
    color: black;
  }
`;

export const footerCopyright = styled.p`
  text-align: center;
  padding: 20px;
`;
