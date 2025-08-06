'use client';
import { getAllRepositorylist } from '@/actions/repos';
import Card from '@/components/ui/card';
import { Pagination } from '@/components/common/pagination';
import { useEffect, useState } from 'react';
import { Repository } from '@/types/api-types/repository';
import TableSkeleton from '../common/table-skeleton';

interface HomeProp {
  page: number;
}

export default function HomeComponent({ page }: HomeProp) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { items, totalCount } = await getAllRepositorylist(page);
      setRepositories(items ?? []);
      setTotalPages(totalCount ?? 0);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  return (
    <div className="">
      {loading ? (
        <TableSkeleton />
      ) : (
        <div>
          {repositories?.map(item => (
            <div key={item.id}>
              <Card
                name={item.name}
                description={item.description}
                numberOfStars={item.stargazers_count}
                username={`${item.owner.login}`}
                avatarImage={item.owner.avatar_url}
              />
            </div>
          ))}
        </div>
      )}

      <div className="my-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
