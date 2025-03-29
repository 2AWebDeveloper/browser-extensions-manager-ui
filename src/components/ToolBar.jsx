import { useExtensions } from "../contexts/ExtensionsContext";

export default function ToolBar() {
  const { filterBy, setFilterBy } = useExtensions();

  return (
    <div className="flex flex-col items-center justify-between gap-4 mt-10 md:flex-row md:mt-16">
      <h2 className="text-[32px] font-bold text-neutral-900 dark:text-neutral-0">
        Extensions List
      </h2>
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setFilterBy("All")}
          type="button"
          className={`filter-btn ${filterBy === "All" ? "active" : null}`}
        >
          All
        </button>
        <button
          onClick={() => setFilterBy("Active")}
          type="button"
          className={`filter-btn ${filterBy === "Active" ? "active" : null}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilterBy("Inactive")}
          type="button"
          className={`filter-btn ${filterBy === "Inactive" ? "active" : null}`}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
