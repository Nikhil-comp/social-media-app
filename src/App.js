import "./App.css";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CreatePost from './components/CreatePost.js';
import Sidebar from './components/Sidebar.js';
import PostList from './components/PostList';

import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import PostListProvider from './store/Post_store.js';
export default function App()
{
  const [selectedTab,setSelectedTab]= useState("Home");
  return(
     <PostListProvider >
     <div className="container">
       <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
       <div className='content'>
       <Header/>
       {selectedTab === "Home"? (<PostList></PostList>) : (<CreatePost></CreatePost>)};
       <Footer></Footer>
       </div>
       </div>
       </PostListProvider>
);
}