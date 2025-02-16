// exported type has all fields not required

type SearchResult = {
  id: number;
  title: string;
  description: string;
  url: string;
};

type SearchData = {
  results: SearchResult[];
  total_pages: number;
  [field: string]: unknown;
};

export type SearchResponse = Partial<SearchData>;
