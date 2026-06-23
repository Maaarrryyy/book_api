import type { Book } from "../types/types";

interface BookCardProps {
  book: Book;
}

// Используем стандартную функцию. Пропсы деструктуризируем и типизируем напрямую
export function BookCard({ book }: BookCardProps) {
  return (
    <article className="flex flex-col justify-between h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col flex-1">
        
        {/* Обложка */}
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-slate-100">
          <img
            src={book.book_image}
            alt={book.title}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute top-2.5 left-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/90 text-xs font-bold text-white backdrop-blur-sm">
            {book.rank}
          </div>
        </div>

        {/* Инфо */}
        <div className="mt-4 flex flex-col flex-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
            {book.author}
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900 line-clamp-2 min-h-[2.5rem] leading-tight">
            {book.title}
          </h3>
          <p className="mt-2 text-xs text-slate-500 line-clamp-3 flex-1">
            {book.description || "Описание отсутствует."}
          </p>
        </div>
      </div>

      {/* Кнопка */}
      <div className="mt-4">
        <a
          href={book.amazon_product_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-600 focus:outline-none"
        >
          Buy on Amazon
        </a>
      </div>
    </article>
  );
}