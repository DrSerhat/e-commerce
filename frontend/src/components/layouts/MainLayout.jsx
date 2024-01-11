import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import PropTypes from "prop-types"
import Search from "../Modals/SearchModal/Search"
import Dialog from '../Modals/DialogModal/dialog'
const MainLayout = (props) => {
  const [isSearchVisible, setIsSearchVisible]=React.useState(false);
  const [isDialogVisible, setIsDialogVisible]=React.useState(false);

React.useEffect(()=>{
 const dialogStatus=localStorage.getItem("dialog")?JSON.parse(localStorage.getItem("dialog")):localStorage.setItem("dialog",JSON.stringify(true));
setTimeout(()=>{setIsDialogVisible(dialogStatus)},2000);
 },[])
  return (
    <div className="main-layout">
        <Header setIsSearchVisible={setIsSearchVisible} setIsDialogVisible={setIsDialogVisible}/>
        <Search isSearchVisible={isSearchVisible} setIsSearchVisible={setIsSearchVisible}/>
        <Dialog isDialogVisible={isDialogVisible} setIsDialogVisible={setIsDialogVisible}/>
           {props.children}
        <Footer/>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes={
    children: PropTypes.node
}