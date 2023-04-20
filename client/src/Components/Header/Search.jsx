import { useState , useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, styled, List, ListItem } from "@mui/material";

import {useSelector , useDispatch} from 'react-redux';
import { getProducts } from '../../redux/actions/productsAction'
import {Link} from 'react-router-dom';

const SearchContainer = styled(Box)`
background : #fff;
width : 38% ;
border-radius: 2px;
margin-left: 10px;
display: flex;`;

const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width: 100%;
fontSize:unsetd `;

const SearchIconWrapper = styled(Box)`
color:black;
padding: 2px; 
`;

const ListWrapper = styled(List)`
position:absolute;
background: #fff;
color:#000;
margin-top: 36px;
`;

const Search = () => {
    const [text , setText] = useState('');
    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch(); 

    const getText = (text) => {
        setText(text);
    }

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])

    return(
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for books'
                onChange={(e) => getText(e.target.value) } value={text}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                text && 
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
                            return(
                            <ListItem>
                                <Link to={`/product/${product.id}`} 
                                onClick={() => setText('')} style={{textDecoration:'none', color:'#000'}}>
                                {product.title.longTitle}
                                </Link>
                            </ListItem>
                            )
                        })
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;