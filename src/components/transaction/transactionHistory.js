import {
  TableAll, 
  TableTh,
   TableTd
  } from './transaction.styled'
import { PropTypes } from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    return (
        <TableAll>
          <thead>
            <tr>
              <TableTh>Type</TableTh>
              <TableTh>Amount</TableTh>
              <TableTh>Currency</TableTh>
            </tr>
          </thead>

          <tbody>
            {transactions.map(item =>
                <tr key={item.id}>
                <TableTd>{item.type}</TableTd>
                <TableTd>{item.amount}</TableTd>
                <TableTd>{item.currency}</TableTd>
              </tr>
              )}

          </tbody>
        </TableAll>
    )
}

TransactionHistory.protoTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
}),
  ),
};
