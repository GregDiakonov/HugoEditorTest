import React from "react";
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'; 

var modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        
      [{'header': [1, 2, false]}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      
      [{'indent': '-1'}, {'indent': '+1'}],          
      [{'direction': 'rtl'}],                         
      [{'size': ['small', false, 'large', 'huge']}],
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      [{'color': []}, {'background': []}],            
      [{'font': []}],
      [{'align': []}]                            
    ],
    clipboard: {
      matchVisualAsterisk: true,
    },
};

const TextEditor = () => {
    return <ReactQuill modules={modules} />;
};

export default TextEditor;