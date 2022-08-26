
import {React,useState,useRef} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Departments.css'



const departments =
 ['Customer success', 
'Tech & Development',
'Development',
'Product',
'Marketing Myanmar department',
'Marketing Srilanka department',
'Human resource managing department'
];


export default function Departments(props) {




  return (
    
    <Autocomplete
      defaultValue={props.depName}
      options={departments}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input  type="text" {...params.inputProps} className='dep-list'/>
        </div>
      )}
    
      
    />
  );
}

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const departments = [
//   { departmentName: 'Customer success'},
//   { departmentName: 'Tech & Development'},
//   { departmentName: 'Development'},
//   { departmentName: 'Product'},
//   { departmentName: 'Marketing Myanmar department'},
//   { departmentName: 'Marketing Srilanka department'},
//   { departmentName: 'Human resource managing department'},
// ];
