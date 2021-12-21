import Link from "next/link";
import styled from 'styled-components';
import { ScreenBP } from "../../lib/ScreenBP";

export const News = styled.div`
  margin: auto;
  max-width: 1000px;
  @media screen and (min-width: ${ScreenBP.md}px) {
    padding-top: 30px;
  }
`;
export const Tabs = styled.div`
  background-color: #f4f4ee;
  padding: 4px;
`;
export const TabsHeader = styled.div`
  display: flex;
  justify-content: stretch;
  background-color: #f4f4ee;

`;
type TabNameProps = {
  active: boolean;
};
export const TabName = styled.div<TabNameProps> `
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 25px 0;
  font-size: 20px;
  ${(props) => props.active && `
    background-color: #fff;
    font-weight: 700;
  `}
`;
export const TabsContent = styled.div`
  background-color: #fff;
`;
export const TabContent = styled.div`
  
`;
export const NewsList = styled.div`
  
`;
export const NewsItem = styled.div`
  padding: 20px 0 35px;
  margin: 0 32px;
  border-bottom: 2px solid #dddddd;
  display: flex;
  font-size: 18px;
  &:last-child {
    border-bottom: none;
  }
`;
export const NewsItemNumber = styled.div`
  color: #777777;
  margin-right: 25px;
`;
export const NewsItemText = styled(Link)`
  
`;
