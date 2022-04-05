import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation, useNavigate } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';



function SimpleBreadcrumbs(props) {
  let location = useLocation();
  let nevigate = useNavigate();
  const pathname = location.pathname.split("/").filter(x => x);
  const BreadCrumbDisabled = pathname[0] === undefined|| pathname[0] === 'home'; 
  // console.log(pathname[0], BreadCrumbDisabled);
  return (
    <div className={`${BreadCrumbDisabled ? "hidden" : ""} container-fluid  bg-gray-200 pt-6 -mt-3`}>
    <div className="rounded-lg container bg-gray-200 items-center flex border-2 border-gray-600 h-50px">
      <Breadcrumbs aria-label="breadcrumb">
        <Link onClick={()=>nevigate("/home")} className="hover:text-blue-600 cursor-pointer">Home</Link>
        {
          pathname.map((name, index) => {
            const routeTo = `/${pathname.slice(0, index + 1).join("/")}`;  
            const isLast = index === pathname.length - 1;
            return (
              isLast?(<Typography>{name}</Typography>):
              (<Link key={index} onClick={()=>nevigate(routeTo)} className="hover:text-blue-600 cursor-pointer">{name}</Link>)
            )
          })
        }  
        
      </Breadcrumbs>
      </div>
      </div>
  );
}
export default SimpleBreadcrumbs;

// import React from 'react';

// const breadcrumbs={
//   background: 'white',
//   border: '1px solid rgba(0,0,0,0.125)',
//   borderRadius: '0.37rem',
// }
// function SimpleBreadcrumbs(props) {

//   const islast = (index) => {
//     return index === props.crumbs.length - 1;
//   }
//   return (
//     <nav className='row justify-center mt-2'>
//       <ol className='breadcrumbs' style={breadcrumbs}>
//         {
//           props.crumbs.map((crumb, index) => {
//             const disabled = islast(index) ? 'disable' : '';
//             return (
//               <li key={index}
//                 className="breadcrumb-item align-item-center">
//                 <button className={`btn btn-link ${disabled}`} onClick={() => props.selected(crumb)}>{crumb}</button>
//               </li>
//             )
//           })
//           }
//       </ol>
//     </nav>
//   )
// };
// export default SimpleBreadcrumbs;