import styled from "styled-components";
import { Button } from "antd";

import palette from "../palette";

const StyledButton = styled(Button)`
  background-color: ${palette.darkGreen};
  opacity: 0.75;
  border: none;
  font-family: ArchivoNarrow-Bold;
  font-size: 16px !important;
  color: ${palette.light} !important;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  &:hover {
    background-color: ${palette.darkGreen};
    opacity: 1;
  }
`;

export default StyledButton;
