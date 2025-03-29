export default function ToolBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 mt-10 md:flex-row md:mt-16">
      <h2 className="text-[32px] font-bold text-neutral-900 dark:text-neutral-0">
        Extensions List
      </h2>
      <div className="flex items-center gap-2.5">
        <button type="button" className="filter-btn active">
          All
        </button>
        <button type="button" className="filter-btn">
          Active
        </button>
        <button type="button" className="filter-btn">
          Inactive
        </button>
      </div>
    </div>
  );
}
