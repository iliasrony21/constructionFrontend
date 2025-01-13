import React from 'react'

const AdminHeader = () => {
  return (
    <div>
        <div className="bg-white shadow p-4 flex justify-between items-center">
    <div className="text-xl font-bold">Admin Dashboard</div>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-3 py-1 mr-4"
      />
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">👤</div>
    </div>
  </div>
    </div>
  )
}

export default AdminHeader