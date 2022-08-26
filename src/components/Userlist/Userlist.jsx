import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './Userlist.css'
import Departments from '../Department/Departments';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';




function Userlist() {

    const columns = [
    { field: 'employee', headerName: 'Employee', width: 200 ,
      renderCell:(params)=>{
        return(
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='user'/>
            {params.row.employee}
          </div>
        )
      }
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      editable: true,
    },

    {
      field:'department',
      headerName:'Department',
      width:200,
      renderCell:(params)=>{
        return(
          <div className='departmentList'>
            {params.row.department}
          </div>
        )
      }
    },
    {
      field:'employeecode',
      headerName:'Employee Code',
      width:180
    },
    {
      field:'customtag',
      headerName:'Custom tags',
      width:180
    }
  ];
  
  const rows = [
    { id: 1, 
      employee: "Kyi Sin Su Tar" , 
      avatar:"https://randomuser.me/api/portraits/women/3.jpg",
      email: 'kyisintar@better.hr', 
      location : 'Yangon office',
      phone: "+959483482381" ,
      department : <Departments depName ="Product"/>,
      employeecode: '004-342',
      customtag:'Intern'
      },
    { id: 2,
      employee: "Ye Min Htun",
      avatar:"https://randomuser.me/api/portraits/men/51.jpg",
      email: 'yeminhtun@better.hr',
      location: 'Yangon office', 
      phone: "+959483485392",
      // department : 'Tech & Development',
      department : <Departments depName ="Tech & Development"/>,
      employeecode: '004-342',
      customtag:'Trainee'
     },
    { id: 3,
      employee: "Eric", 
      avatar:"https://randomuser.me/api/portraits/men/1.jpg",
      email: 'eric@better.hr', 
      location: 'Yangon office Sue Lay',
      phone: "+959983496387",
      department : <Departments depName ="Development"/>,
      employeecode: '004-342',
      customtag:'Intern'
     },
    { id: 4,
      employee: "Biden", 
      avatar:"https://randomuser.me/api/portraits/men/2.jpg",
      email: 'biden@better.hr', 
      location: 'Yangon office',
      phone: "+959783482396",
      department : <Departments depName ="Product"/>,
      employeecode: '004-342',
      customtag:'Trainee'
     },
    { id: 5,
      employee: "Mike",
      avatar:"https://randomuser.me/api/portraits/men/3.jpg",
      email: 'mike@better.hr', 
      location: 'Yangon office', 
      phone: "+959483402379" ,
      department : <Departments depName ="Tech & Development"/>,
      employeecode: '004-342',
      customtag:'Intern'
    },
    { id: 6,
      employee: "Devi",
      avatar:"https://randomuser.me/api/portraits/men/4.jpg", 
      email: 'Devi@better.hr', 
      location: 'Yangon office Sue Lay', 
      phone: "+959483489385",
      department : <Departments depName ="Marketing Myanmar"/>,
      employeecode: '004-342',
      customtag:'Spannish-spoken'
    },
    { id: 7,
      employee: "Johnathan",
      avatar:"https://randomuser.me/api/portraits/men/7.jpg", 
      email: 'johnathan@better.hr', 
      location: 'Mandalay office', 
      phone: "+959483432396" ,
      department : <Departments depName ="Tech & Development"/>,
      employeecode: '004-342',
      customtag:'Intern'
    },
    { id: 8,
      employee: "Walter",
      avatar:"https://randomuser.me/api/portraits/men/10.jpg", 
      email: 'walter@better.hr', 
      location: 'Yangon office',
      phone: "+959883482383" ,
      department : <Departments depName ="Development"/>,
      employeecode: '004-342',
      customtag:'Trainee'
    },
    { id: 9,
      employee: "May The Chit",
      avatar:"https://randomuser.me/api/portraits/women/20.jpg",
      email: 'maythechit@better.hr', 
      location: 'Yangon office', 
      phone: "+959483382353" ,
      department : 'Product',
      department : <Departments depName ="Customer success"/>,
      employeecode: '004-342',
      customtag:'Spannish-spoken'
    },
    { id: 10,
      employee: "Elanor", 
      avatar:"https://randomuser.me/api/portraits/women/39.jpg", 
      email: 'elanor@better.hr', 
      location: 'Yangon office', 
      phone: "+959483582318" ,
      department : <Departments depName ="Development"/>,
      employeecode: '004-342',
      customtag:'Trainee'
    },
    { id: 11,
      employee: "Wilson", 
      avatar:"https://randomuser.me/api/portraits/men/16.jpg", 
      email: 'wilson@better.hr', 
      location: 'Yangon office Sue Lay',
      phone: "+959482422376" ,
      department : <Departments depName ="Tech & Development"/>,
      employeecode: '004-342',
      customtag:'Intern'
    },
 
  ];
   
      
  return (
    
    <div className='employee-table'>
      <div className='table-title'>
        <div className='employee-dir'>
         <ArrowBackIcon className='arrow-icon'/> 
         <p> Employee Directory</p>
         <FilterListIcon className='filter-icon'/>
         <SearchIcon/>
        </div>
        <div className='create-employee'>
         <button >Create Employee</button>
         <MoreVertIcon className='morever-icon'/>
         </div>
         
      </div>
    <div style={{ height: '100%', width: '100%' }}>
      
      
      <DataGrid
       
        rows={rows}
        columns={columns}
        pphoneSize={13}
        checkboxSelection
        disableSelectionOnClick
       
      />
    </div>
    </div>
    
  )
}

export default Userlist