import { getData } from '@/lib/action';
import { AddTodoButton } from '@/components/AddTodoButton';
import { Todos } from '@/components/Todos';

const tableHeaders = ['', 'Title', 'Description', ''];

const Page = async () => {
  const todos = await getData();
  return (
    <div className="mx-auto px-6 py-2 sm:px-12 xl:w-[75rem]">
      <AddTodoButton />
      <div className="rounded-lg border-y border-solid bg-white">
        <div className="px-6 py-3"></div>
        <table className="w-full">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="rounded-lg border-y-2 border-solid bg-white px-6 py-3 text-left text-sm font-normal text-gray-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Todos todos={todos} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
