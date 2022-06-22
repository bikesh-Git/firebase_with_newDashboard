import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './single.scss'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

function Single() {
  return (
    <div>  <div className='single'>
    <Sidebar/>
    <div className='singleContainer'>
      <Navbar/>
     <div className='top'>
       <div className='left'>
         <div className='editBtn'>Edit</div>
         <h1 className='title'>Infornamtion </h1>
         <div className='item'>
           <img className='itemImg' src="https://i.picsum.photos/id/385/200/300.jpg?hmac=IG8cHDliDmlgbSYX1yquX_5cAHcuS_O378oPs5rZGrU" alt="" />
           <div className='details'>
            <h1 className='itemTitle'>bikeshver</h1>
            <div className='itemDetails'>
              <span className='itemKey'>Email</span>
              <span className='itemValue'>bikesh@gmail.com</span>
            </div>
            <div className='itemDetails'>
              <span className='itemKey'>phone</span>
              <span className='itemValue'>312321312</span>
            </div>
            <div className='itemDetails'>
              <span className='itemKey'>address</span>
              <span className='itemValue'>flat 28 c7 dsaj dsdash d</span>
            </div>
            <div className='itemDetails'>
              <span className='itemKey'>Country</span>
              <span className='itemValue'>India</span>
            </div>
           </div>
         </div>
         
       </div>

       <div className='right'>
         <Chart aspect={4/1} title="user spending (last 6 months )" />
       </div>
     </div>
     <div className='bottom'>
     <h1 className='title'>Infornamtion </h1>
    <Table />
     </div>
    </div>

  </div></div>  
  )
}

export default Single