import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { create } from '@/routes/roles';
import { Head, Link, usePage } from '@inertiajs/react';

interface Role {
  id: number;
  name: string;
}

interface PageProps {
  roles: Role[];
  flash: {
    success?: string;
  };
  [key: string]: unknown;
}

const Index = () => {
  const { roles } = usePage<PageProps>().props;
  // const [msg, setMsg] = useState(flash.success);

  // setTimeout(() => setMsg(null), 2000);

  return (
    <AppLayout>
      <Head title="Roles" />
      <div className="p-6">
        <div className="mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">A list of current roles.</h1>
            <Link href={create.url()}>Add Role</Link>
          </div>
          <Table>
            <TableCaption>A list of current roles.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role: Role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">{role.id}</TableCell>
                  <TableCell>{role.name}</TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
