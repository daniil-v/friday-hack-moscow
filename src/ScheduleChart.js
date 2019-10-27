import React from 'react';

import { Paper, Grid, Select, MenuItem } from '@material-ui/core';
import {Chart} from 'react-google-charts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
  },
}));

const ScheduleChart = () => {
  const classes = useStyles();

  return (
      <>
       <div className={classes.header}>Schedule</div>
      <Chart
  width={'100%'}
  height={'400px'}
  chartType="Gantt"
  loader={<div>Loading Chart</div>}
  data={[
          [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: 'Resource' },
            { type: 'date', label: 'Start Time' },
            { type: 'date', label: 'End Time' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' },
          ],
          [
            'ant',
            'Антон',
            'ant',
            new Date(2019, 10, 27, 10),
            new Date(2019, 10, 27, 11),
            null,
            100,
            null,
          ],
          [
            'iva',
            'Иван',
            'iva',
            new Date(2019, 10, 27, 10, 30),
            new Date(2019, 10, 27, 12, 30),
            null,
            100,
            null,
          ],
          [
            'kir',
            'Кирилл',
            'kir',
            new Date(2019, 10, 27, 11),
            new Date(2019, 10, 27, 14),
            null,
            100,
            null,
          ],
          [
            'sta',
            'Стас',
            'sta',
            new Date(2019, 10, 27, 14, 30),
            new Date(2019, 10, 27, 20, 30),
            null,
            100,
            null,
          ],
          [
            'dav',
            'Давид',
            'dav',
            new Date(2019, 10, 27, 10, 30),
            new Date(2019, 10, 27, 16, 30),
            null,
            100,
            null,
          ],
        ]}
        options={{
          height: 400,
          gantt: {
            trackHeight: 30,
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
      </>
  );
}

export default ScheduleChart;
