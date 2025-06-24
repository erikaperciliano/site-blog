import { Search } from '@/components/search';
import { useRouter } from 'next/router';
import { PostCard } from './components/post-card';

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Search results for "${query}"`
    : 'Tips and strategies to boost your business';

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      <PostCard
        title="Turning your business into an online store"
        description="If you are looking for a simple and effective way to sell your products online..."
        date="20/12/2024"
        slug="/transforming"
        image="/assets/first-post.png"
        author={{
          avatar: '/customer-01.png',
          name: 'Aspen Dokidis',
        }}
      />
    </div>
  );
}