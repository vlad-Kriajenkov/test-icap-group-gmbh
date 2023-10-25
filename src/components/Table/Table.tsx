import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { ModalContactAdd, ModalContactEddit } from 'components/Modal';
import { Modal } from '../Modal';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { ButtonContact } from 'components/Buttons';
import { useAppSelector, useAppDispatch } from 'redux/hook';
import { getAllContats } from 'redux/contacts/contacts-operation';
interface Column {
  id: 'name' | 'email' | 'birthday_date' | 'phone_number' | 'address';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'birthday_date',
    label: 'Birthday',
    minWidth: 170,
  },
  {
    id: 'phone_number',
    label: 'Phone',
    minWidth: 170,
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
  },
];

export const StickyHeadTable = () => {
  const rows = useAppSelector(state => state.contact.contactsInfo.contactsArrr);
  const refreshPage = useAppSelector(state => state.contact.refreshPage);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [idUser, setIdUser] = React.useState<number>();
  const [edditModal, setEdditModal] = React.useState<boolean>(false);
  const [addModal, setAddModal] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    dispatch(getAllContats());
  }, [dispatch, refreshPage]);

  const targetModal = (typeModal: string, id?: number) => {
    if (typeModal === 'eddit') {
      setIdUser(id);
      setEdditModal(!edditModal);
      setAddModal(false);
    } else if (typeModal === 'add') {
      setEdditModal(false);
      setAddModal(!addModal);
    } else if (typeModal === 'closeAll') {
      setEdditModal(false);
      setAddModal(false);
    }
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      onClick={() => targetModal('eddit', row.id)}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonContact targetModal={targetModal} typeBtn="button">
          <AiOutlineUserAdd />
        </ButtonContact>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        ></TablePagination>
      </Paper>


      

      {edditModal && (
        <Modal handleBurger={edditModal} targetModalAll={targetModal}>
          <ModalContactEddit id={idUser} />
        </Modal>
      )}
      {addModal && (
        <Modal handleBurger={addModal} targetModalAll={targetModal}>
          <ModalContactAdd />
        </Modal>
      )}
    </>
  );
};
