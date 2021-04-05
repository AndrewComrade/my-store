import React, {isValidElement, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from '@material-ui/lab';
import {setPage} from '../redux/actions/deviceActions';

const Pages = () => {
  const dispatch = useDispatch();
  const {page, totalCount, limit} = useSelector(({devices}) => devices);
  const pagesCount = Math.ceil(totalCount / limit);

  const onPageChange = (e, value) => {
    dispatch(setPage(value));
  };

  return (
    <Pagination count={pagesCount} onChange={onPageChange} page={page}/>
  );
};

export default Pages;
