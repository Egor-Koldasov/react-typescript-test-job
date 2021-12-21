import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import NewsTabs from '../components/NewsTabs/NewsTabs';
import axios from 'axios';
import AxiosMockAdapter from "axios-mock-adapter";
import { footballUrl, travelUrl, ukNewsUrl } from '../lib/urls';
import { NewsItem } from '../state/news';
import { mockUkNews } from './mock/news/mockUkNews';
import { mockFootball } from './mock/news/mockFootball';
import { mockTravel } from './mock/news/mockTravel';

const mockAxios = new AxiosMockAdapter(axios);

mockAxios.onGet(ukNewsUrl).reply(200, mockUkNews)
mockAxios.onGet(footballUrl).reply(200, mockFootball)
mockAxios.onGet(travelUrl).reply(200, mockTravel)

const assertNewsPresent = (newsList: NewsItem[]) => {
  // throws an error if any news item IS NOT found by its text
  newsList.map((newsItem) => {
    screen.getByText(newsItem.webTitle);
  })
}
const assertNewsNotPresent = (newsList: NewsItem[]) => {
  // throws an error if any news item IS found by its text
  newsList.map((newsItem) => {
    const newsEl = screen.queryByText(newsItem.webTitle);
    expect(newsEl).toBeNull();
  })
}
describe(`NewsTabs`, () => {
  let ukNewsTab: HTMLElement;
  let footballTab: HTMLElement;
  let travelTab: HTMLElement;
  beforeEach(async () => {
    render(
      <NewsTabs />
    );
    await waitFor(() => expect(() => screen.getByText('Loading')).toThrow())
    ukNewsTab = screen.getByText('UK News');
    footballTab = screen.getByText('Football');
    travelTab = screen.getByText('Travel');
  });

  test(`UK News are shown correctly by default`, async () => {
    assertNewsPresent(mockUkNews.response.results);
    assertNewsNotPresent(mockFootball.response.results);
    assertNewsNotPresent(mockTravel.response.results);
  });
  test(`Football news are shown correctly`, async () => {
    await act(async () => userEvent.click(footballTab));
    assertNewsPresent(mockFootball.response.results);
    assertNewsNotPresent(mockUkNews.response.results);
    assertNewsNotPresent(mockTravel.response.results);
  });
  test(`Travel news are shown correctly`, async () => {
    await act(async () => userEvent.click(travelTab));
    assertNewsPresent(mockTravel.response.results);
    assertNewsNotPresent(mockUkNews.response.results);
    assertNewsNotPresent(mockFootball.response.results);
  });
});