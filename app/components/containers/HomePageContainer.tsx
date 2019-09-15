import React, { memo, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '50px auto 10px auto',
    width: '80%',
    padding: 15,
  },
});

export const HomePageContainer = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      Home Page
    </div>
  );
};
export default memo(HomePageContainer);
