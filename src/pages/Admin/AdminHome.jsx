import React from 'react'
import FeaturedInfo from '../../components/AdminComponents/FeaturedInfo'
import Chart from '../../components/AdminComponents/Chart'
import usersdata from '../../data/UsersData'
import WidgetSmall from '../../components/AdminComponents/WidgetSmall'
import WidgetLg from '../../components/AdminComponents/WidgetLg'

const AdminHome = () => {
  return (
    <div className=' flex-[4_0_0%]'>
        <FeaturedInfo/>
        <Chart data={usersdata} title={"User Analytics"} grid dataKey={"Active User"}/>
        <div id="homeWidget" className='flex m-5'>
            <WidgetSmall/>
            <WidgetLg/>
        </div>
    </div>
  )
}

export default AdminHome