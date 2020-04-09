import React from 'react';
import { range } from 'lodash';
import { useRouter } from 'next/router';

import { getParamsFromQuery } from '@app/src/domain/reducers/newsReducer/list/query';

import { PaginationButton } from './PaginationButton';
import s from './Pagination.css';

interface PaginationProps {
  count: number;
  perPage: number;
}

export const Pagination = ({ count, perPage }: PaginationProps) => {
  const pagesCount = getPagesCount(count, perPage);
  const router = useRouter();
  const params = getParamsFromQuery(router.query);

  return (
    <div className={s.wrapper}>
      {isPrevVisible(params.page, pagesCount) && (
        <PaginationButton
          href={{
            pathname: router.pathname,
            query: getPrevNextQuery(router.query, -1),
          }}
        >
          Предыдущая
        </PaginationButton>
      )}

      {range(pagesCount).map((index) => (
        <PaginationButton
          href={getPageQuery(router.query, index + 1)}
          key={index}
        >
          {index + 1}
        </PaginationButton>
      ))}
      {isNextVisible(params.page, pagesCount) && (
        <PaginationButton
          href={{
            pathname: router.pathname,
            query: getPrevNextQuery(router.query, 1),
          }}
        >
          Следующая
        </PaginationButton>
      )}
    </div>
  );
};

const getPagesCount = (count: number, perPage: number) => {
  return Math.ceil(count / perPage);
};

const isNextVisible = (page: number, pagesCount: number) => {
  return page < pagesCount;
};
const isPrevVisible = (page: number, pagesCount: number) => {
  return page > 1;
};

const getPrevNextQuery = (query: any, delta: number) => {
  return { ...query, page: Number(query.page || 1) + delta };
};
const getPageQuery = (query: any, newPage: number) => {
  return { ...query, page: newPage };
};
