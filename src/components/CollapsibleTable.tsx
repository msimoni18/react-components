import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const ExtraRows = () => {
  return (
    <>
      <TableRow>
        <TableCell className="text-xs">INV00A</TableCell>
        <TableCell className="text-xs">Paid</TableCell>
        <TableCell className="text-xs">Credit Card</TableCell>
        <TableCell className="text-xs text-right">$100.00</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="text-xs">INV00B</TableCell>
        <TableCell className="text-xs">Pending</TableCell>
        <TableCell className="text-xs">PayPal</TableCell>
        <TableCell className="text-xs text-right">$8.00</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </>
  );
};

const CollapsibleTable = () => {
  return (
    <Table>
      <TableCaption>Collapsible table rows with shadcn-ui</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <Collapsible key={index} asChild>
            <>
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
                <TableCell>
                  <CollapsibleTrigger asChild>
                    <MoreHorizontal className="hover:cursor-pointer" />
                  </CollapsibleTrigger>
                </TableCell>
              </TableRow>
              <CollapsibleContent asChild>
                <ExtraRows />
              </CollapsibleContent>
            </>
          </Collapsible>
        ))}
      </TableBody>
    </Table>
  );
};

export default CollapsibleTable;
