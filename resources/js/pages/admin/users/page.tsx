import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

// import { z } from 'zod';

import { columns } from '../../../components/DataTables/admin/users/components/columns';
import { DataTable } from '../../../components/DataTables/admin/users/components/data-table';
import { User } from '../../../components/DataTables/admin/users/data/schema';
// import { tasks } from '../../../components/DataTables/admin/users/data/tasks';

export default function DemoPage() {
  const { users, filters, can } = usePage().props as any & {
    users: User[];
    filters: any;
    can: any;
  };

  console.log(users);

  return (
    <AppLayout>
      <Head title="Users" />
      <div className="p-6">
        <div className="mx-auto">
          <DataTable columns={columns} data={users.data} />
        </div>
      </div>
    </AppLayout>
  );
}
