export const Loading = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <tr key={index}>
          <td colSpan={4}>
            <div
              role="status"
              className="animate-pulse space-y-4 divide-y rounded p-4 shadow"
            >
              <div className=" ">
                <div className="flex gap-10">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-3 w-full rounded-full bg-gray-300"
                    />
                  ))}
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};
