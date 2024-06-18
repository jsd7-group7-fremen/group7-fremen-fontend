import React from 'react'

const AdminSidebar = () => {
  return (
    <div className='flex-1 h-[calc(100vh-50px)] bg-blue-100 sticky top-[50px]'>
        <div id='wrapper' className=' p-5 text-[#555]'>
            <div id='Menu' className=' mb-2.5'>
                <h3 id='sidebartitle' className=' text-sm'>Dashboard</h3>
                <ul id='sidebarlist' className=' p-5'>
                    <li className=' p-1.5 cursor-pointer'>
                        Home
                    </li>
                    <li className=' p-1.5 cursor-pointer'>
                        Analyics
                    </li>
                    <li className=' p-1.5 cursor-pointer'>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar