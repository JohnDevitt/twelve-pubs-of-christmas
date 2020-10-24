import styled from "styled-components";
import { Typography, List, Input, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const Container = styled.div`
  height: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PubCrawlInfo = styled.div`
  padding: 16px;
  background-color: #2b4636;
  opacity: 0.75;
  box-shadow: 0 4px 2px 0 gray;
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
`;

export const AutoCompleteContainer = styled.div`
  margin: 16px;
`;

export const AutoCompleteSearchInput = styled(Input)`
  padding: 16px;
  background: white;
`;

export const AutoCompleteList = styled(List)`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding-right: 32px;
`;

export const AutoCompleteItem = styled(List.Item)`
  width: 100%;
  padding-left: 4px;
`;

export const PubListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #fafafa;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin: 4px 0px;
  text-align: flex-start;
`;

export const PubInfo = styled.div`
  flex-grow: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const PubTitle = styled(Typography.Text)`
  font-family: JuliusSansOne;
  font-size: 24px !important;
  color: #2b4636 !important;
  margin: 0 32px 0 0 !important;
  opacity: 0.75;
`;

export const PubAddress = styled(Typography.Text)`
  font-family: ArchivoNarrow-Bold;
  font-size: 12px;
  line-height: 24px;
  color: #2b4636 !important;
  letter-spacing: 0.05em;
  flex-grow: 2;
  opacity: 0.75;
  text-align: left;
  text-transform: uppercase;
`;

export const StyledButton = styled(Button)`
  font-family: ArchivoNarrow-Bold;
  font-size: 12px;
  line-height: 24px;
  background-color: #2b4636 !important;
  letter-spacing: 0.05em;
  opacity: 0.75;
  text-transform: uppercase;
  color: white;
  margin: 16px;
  border: none;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  color: #2b4636 !important;
  opacity: 0.75;
`;
