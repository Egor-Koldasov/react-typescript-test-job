import axios from "axios";
import { useEffect, useState } from "react";
import { ukNewsUrl, footballUrl, travelUrl } from "../lib/urls";

export type NewsItem = {
  id: string
  webTitle: string
  webUrl: string
}

export type NewsList = {
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
