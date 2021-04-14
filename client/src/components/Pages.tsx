import React, {ChangeEvent} from 'react';
import {Pagination} from '@material-ui/lab';
import {setPage} from '../redux/actions/deviceActions';
import {useAppDispatch, useAppSelector} from '../types/hooks';

const Pages: React.FC = () => {
  const dispatch = useAppDispatch();
  const {page, totalCount, limit} = useAppSelector(({devices}) => devices);
  const pagesCount = Math.ceil(totalCount / limit);

  const onPageChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Pagination count={pagesCount} onChange={onPageChange} page={page}/>
  );
};

export default Pages;
