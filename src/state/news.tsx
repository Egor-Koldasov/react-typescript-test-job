import axios from "axios";
import { useEffect, useState } from "react";

type NewsItem = {
  id: string
  webTitle: string
  webUrl: string
}

type NewsList = {
  response: {
    startIndex: number
    results: NewsItem[]
  }
}

export type NewsState = {
  ukNews: NewsList
  football: NewsList
  travel: NewsList
}

export const ukNewsUrl = 'https://content.guardianapis.com/search?section=uk-news&api-key=test';
export const footballUrl = 'https://content.guardianapis.com/search?section=football&api-key=test';
export const travelUrl = 'https://content.guardianapis.com/search?section=travel&api-key=test';

export const fetchSection = async (url: string) => {
  const res = await axios.get<NewsList>(url);
  return res.data;
}

export const useNews = () => {
  const [ukNews, setUkNews] = useState<NewsState | null>(null);
  useEffect(() => {
    const fetchNews = async () => {
      const [ukNews, football, travel] = await Promise.all([
        fetchSection(ukNewsUrl),
        fetchSection(footballUrl),
        fetchSection(travelUrl),
      ]);
      setUkNews({
        ukNews,
        football,
        travel,
      });
    };
    fetchNews();
  }, []);
  return ukNews;
};
