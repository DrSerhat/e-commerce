import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const cartContext=createContext();

const CartProvider = ({children})=>{
const [chartItems,setChartItems] = useState([])
const addToChart=(productSelected)=>{
    setChartItems((prev)=>[...prev,productSelected]);
    };
const cartLength=chartItems.length
const value={addToChart, cartLength};
console.log(chartItems);

    return (<cartContext.Provider value={value}>{children}</cartContext.Provider>)
}

export default CartProvider;

CartProvider.propTypes={
    children:PropTypes.node,
    chartItems:PropTypes.array,
    setChartItems:PropTypes.func,
    addToChart:PropTypes.func
}