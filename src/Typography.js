import styled from "styled-components";
import { Typography } from "antd";
import palette from "./palette.json";

export const Headline = styled(Typography.Text)`
  font-family: JuliusSansOne;
  font-size: 32px !important;
  font-weight: 600 !important;
  color: ${palette.light} !important;
  margin: 0 !important;
`;

export const HeadlineSubtitle = styled(Typography.Text)`
  font-family: ArchivoNarrow-Bold;
  font-size: 16px !important;
  text-transform: uppercase;
  color: ${palette.light} !important;
  margin-top: 16px !important;
  letter-spacing: 0.2em;
`;

export const Title = styled(Typography.Title)`
  font-family: ArchivoNarrow-Bold;
  font-size: 16px !important;
  color: ${palette.darkGreen} !important;
  margin: 0 32px 0 0 !important;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  opacity: 0.75;
`;

export const Label = styled(Typography.Text)`
  font-family: JuliusSansOne;
  font-size: 16px !important;
  color: ${palette.darkGreen} !important;
  text-transform: uppercase;
  opacity: 0.75;
`;
