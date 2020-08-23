//https://material-ui.com/demos/tables/


import React from 'react';
import './App.css';
import Customer from './components/Customer'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth:1000,
  }

})

const customers = [
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'Jone Doe1',
  'birthday':'1751212',
  'gender':'male',
  'job':'student'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'Jone Doe2',
  'birthday':'1751212',
  'gender':'male',
  'job':'student'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'Jone Doe3',
  'birthday':'1751212',
  'gender':'male',
  'job':'student'
},

]

function App(props) {

  const {classes} = props

  return (
    <Paper className = {classes.root}>
      <Table className = {classes.table}>
        <TableHead>
          <TableCell>ID</TableCell>
          <TableCell>IMAGE</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>BIRTHDAY</TableCell>
          <TableCell>GENDER</TableCell>
          <TableCell>JOB</TableCell>
        </TableHead>

        <TableBody>
        {customers.map((c) => {
            return (
              <Customer
                key={c.id}      // must use
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles) (App) ;
