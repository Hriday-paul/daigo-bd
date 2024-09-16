import AdminDashboard from '@/components/Shared/AdminDashboard/AdminDashboard'
import React from 'react'

const AdminRootLayout = ({ children }: { children: React.ReactNode })=> {
    return (
        <div>
            <AdminDashboard>
                {children}
            </AdminDashboard>
        </div>
    )
}

export default AdminRootLayout;