import { useEffect } from "react";
import { Box , styled } from "@mui/material";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { getProducts } from "../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 15px 10px;
    background: #f2f2f2;
`;

const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    return(
        <>
        <NavBar/>
        <Component>
            <Banner/>
            <MidSlide products={products} title="Deal Of The Day" timer={true}/> 
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false} /> 
            <Slide products={products} title="Suggesting Items" timer={false}/> 
            <Slide products={products} title="Top Picks" timer={false}/> 
            <Slide products={products} title="Recommended Offers" timer={false}/> 
            <Slide products={products} title="Trending Offers" timer={false}/> 
        </Component>
        </>
    )
}
export default Home;