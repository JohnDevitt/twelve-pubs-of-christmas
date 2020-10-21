import styled from "styled-components";
import { Typography, List, Input } from "antd";

export const Container = styled.div`
  padding: 16px;
  height: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PubCrawlInfo = styled.div`
  border-bottom: 1px solid #fafafa;
`;

export const AutoCompleteContainer = styled.div`
  margin: 16px 0;
`;

export const PubCrawlTitle = styled(Typography.Title)`
  font-size: 28px !important;
  font-weight: 500 !important;
  color: #262626 !important;
  margin: 0 32px 0 0 !important;
`;

export const PubCrawlTime = styled(Typography.Title)`
  font-size: 16px !important;
  color: #8c8c8c !important;
  margin: 4px 0 32px 0 !important;
`;

export const AutoCompleteSearchInput = styled(Input)`
  padding: 16px;
  background: white;
  margin: 4px 0 32px 0 !important;
`;

export const AutoCompleteList = styled(List)`
  position: absolute;
  z-index: 1;
`;

export const AutoCompleteItem = styled(List.Item)`
  width: 100%;
`;

export const PubListTitle = styled(Typography.Title)`
  font-size: 20px !important;
  color: #262626 !important;
`;

export const PubListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #fafafa;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin: 8px 0px;
  text-align: flex-start;
`;

export const PubInfo = styled.div`
  flex-grow: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const PubTitle = styled(Typography.Text)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

export const PubAddress = styled(Typography.Text)`
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.01em;
  flex-grow: 2;
  text-align: left;
  color: #8c8c8c !important;
`;
