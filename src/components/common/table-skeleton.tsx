import React from 'react';

const TableSkeleton = () => {
  return (
    <div className="w-full h-[36rem] mt-8 m-auto bg-gray-400/10 dark:bg-gray-300 rounded-lg animate-pulse duration-1000 flex items-center justify-center">
      <h1 className="text-2xl">Loading...</h1>
    </div>
  );
};

export default TableSkeleton;
