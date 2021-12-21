import { useState } from "react";
import { useNews } from "../../state/news";
import {
  News, Tabs, TabsHeader, TabName, TabsContent, TabContent, NewsList, NewsItem, NewsItemNumber,
  NewsItemText,
} from "./NewsTabsStyles";

const tabs = {
  ukNews: 'UK News',
  football: 'Football',
  travel: 'Travel',
};
type TabId = keyof typeof tabs;
const tabIds: TabId[] = Object.keys(tabs) as TabId[];

type NewsTabsProps = {}

export default function NewsTabs(props: NewsTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<TabId>('ukNews');
  const news = useNews();
  return (
    <News>
      <Tabs>
        <TabsHeader>
          {tabIds.map((tabId: TabId) => (
            <TabName
              active={tabId === activeTabIndex}
              key={tabId}
              onClick={() => setActiveTabIndex(tabId)}
            >
              {tabs[tabId]}
            </TabName>
          ))}
        </TabsHeader>
        <TabsContent>
          <TabContent>
            {!news && <div>Loading</div>}
            {news && (
              <NewsList>
                {news[activeTabIndex].response.results.map((newsItem, newsItemIndex) => (
                  <NewsItem key={newsItem.id}>
                    <NewsItemNumber>{news[activeTabIndex].response.startIndex + newsItemIndex}</NewsItemNumber>
                    <NewsItemText href={newsItem.webUrl}>{newsItem.webTitle}</NewsItemText>
                  </NewsItem>
                ))}
              </NewsList>
            )}
          </TabContent>
        </TabsContent>
      </Tabs>
    </News>
  )
}
