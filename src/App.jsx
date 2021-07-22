import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';
const App=()=>{
    const[addItem,setAdditem]=useState([]);
const Add=(note)=>{
   
   setAdditem((prevData)=>{
       return[...prevData,note]
   });

};
const onDelete=(id)=>{
setAdditem((oldData)=>{
    oldData.filter((curData,ind)=>{
        return ind !==id;
    });
});
};
    return(
        <>
        <Header/>
        <CreateNote passNote={Add}/>
      
       { addItem.map((val,index)=>{
    return(
        <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
    );
        })}
       
        <Footer/>
        </>
    );
}
export default App;