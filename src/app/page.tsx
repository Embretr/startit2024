export default async function Home() {
  return (
    <div className="p-6">
      <div className="grid h-[80vh] grid-cols-3 grid-rows-3 gap-3">
        <div className="col-span-2 row-span-2 rounded-md border border-neutral-200 p-6 shadow-sm">
          <h3>Siste fakturaer</h3>
          
        </div>
        <div className="col-span-1 row-span-1 rounded-md border border-neutral-200 p-6 shadow-sm">
          2
        </div>
        <div className="col-span-1 row-span-1 rounded-md border border-neutral-200 p-6 shadow-sm">
          3
        </div>
        <div className="col-span-1 row-span-1 rounded-md border border-neutral-200 p-6 shadow-sm">
          4
        </div>
        <div className="col-span-2 row-span-1 rounded-md border border-neutral-200 p-6 shadow-sm">
          5
        </div>
      </div>
    </div>
  );
}
