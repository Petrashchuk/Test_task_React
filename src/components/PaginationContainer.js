import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

export function PaginationContainer ({ onPageChange, pageCount = 9 }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination defaultPage={1} count={pageCount} onChange={onPageChange}
                  shape="rounded" color="primary" />
    </div>
  )
}