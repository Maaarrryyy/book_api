export interface Book {
  rank: number;
  title: string;
  author: string;
  description: string;
  publisher: string;
  book_image: string;
  amazon_product_url: string;
}

export interface BookList {
  list_id: number;
  list_name: string;
  list_name_encoded: string;
  display_name: string;
  updated: string;
  books: Book[]; 
}

export interface NYTBooksResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    bestsellers_date: string;
    published_date: string;
    lists: BookList[];
  };
}