import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";
import { LocalOffer as Tag } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledTag = styled(Tag)`
  margin-right: 10px;
  color: #00cc00;
`;

const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
margin-top: 10px;
& > td{
  font-size: 14px;
}`;

const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime()+(5 * 24* 60 * 60 * 1000))
  return (
    <Box>
      <Typography style={{ fontWeight: 700, fontSize: 24 }}>
        {product.title.shortTitle}
      </Typography>
      <Typography style={{ fontWeight: 600, fontSize: 15, color: "#47476b" }}>
        {product.title.longTitle}
      </Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
      </Typography>
      <Typography>
        <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledTag />
          Bank Offer10% off on Axis Bank Credit Card and EMI Transactions, up to
          ₹1500, on orders of ₹5,000 and above T&C
        </Typography>
        <Typography>
          <StyledTag />
          Bank Offer10% off on Flipkart Axis Bank Credit Card EMI
          Transactions,up to ₹1500,on orders of ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledTag />
          Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value
          ₹1000. Valid once per Paytm accountT&C
        </Typography>
        <Typography>
          <StyledTag />
          Buy this product and Get Extra ₹50 Off on Select FansT&C
        </Typography>
      </SmallText>

      <Table style={{marginTop: 10}}>
        <TableBody>
          <ColumnText>
            <TableCell style={{color: '#878787'}}>Delivery</TableCell>
            <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40 </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{color: '#878787'}}>Seller</TableCell>
            <TableCell>
              <Box  style={{color: "#2874f0"}} component='span'>Khan Book Depot</Box>
              <Typography style={{fontSize:12}}> 7 Days Return Policy</Typography>
              <Typography style={{fontSize:12}}> GST invoice available</Typography>
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>

      <Typography style={{ fontWeight: 600, marginBottom: 10, marginTop:30}}>
          About The Product
      </Typography>

        <Table style={{marginTop: 10}}>
        <TableBody>
          <ColumnText>
            <TableCell style={{color: '#878787'}}>Author</TableCell>
            <TableCell>{product.author}</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{color: '#878787'}}>Genre</TableCell>
            <TableCell>{product.Genre}</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{color: '#878787'}}>Description</TableCell>
            <TableCell style={{wordWrap:'break-word'}}>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </Box>
  );
};

export default ProductDetail;
