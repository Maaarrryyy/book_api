import { useBestsellers } from "../hooks/useBook";
import { BookCard } from "./Card";


export function MainPage() {
  const { data, isLoading, error } = useBestsellers();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      </div>
    );
  }

  const lists = data?.results?.lists || [];

  return (
    <div className="min-h-screen bg-slate-50/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full">
        
        <header className="mb-12 border-b border-slate-200 pb-5">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            NYT Bestsellers
          </h1>
        </header>

        <div className="space-y-14">
          {lists.map((list) => (
            <section key={list.list_id} className="scroll-mt-6">
              
              <h2 className="mb-6 border-l-4 border-indigo-500 pl-3 text-xl font-extrabold tracking-tight text-slate-800">
                {list.display_name}
              </h2>

              <div className="grid grid-cols-3">
                {list.books.map((book) => (
                  <BookCard 
                    key={`${book.title}-${book.rank}`} 
                    book={book} 
                  />
                ))}
              </div>

            </section>
          ))}
        </div>

      </div>
    </div>
  );
}