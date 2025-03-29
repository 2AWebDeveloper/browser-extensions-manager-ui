const testData = {
  logo: "./assets/images/logo-devlens.svg",
  name: "DevLens",
  description: "Quickly inspect page layouts and visualize element boundaries.",
  isActive: true,
};
export default function ExtensionsItem() {
  return (
    <li className="flex flex-col min-h-[198px] p-4.5 bg-neutral-0 border border-neutral-200 rounded-[20px] shadow shadow-neutral-600/10 dark:bg-neutral-800 dark:border-neutral-600">
      <div className="flex items-start gap-3.5 grow">
        <img src={testData.logo} alt={testData.name} />
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-0">
            {testData.name}
          </h3>
          <p className="text-[15px] mt-1 text-neutral-600 dark:text-neutral-300">
            {testData.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="px-5 py-2 text-neutral-900 border border-neutral-300 rounded-full hover:bg-red-700 hover:text-neutral-0 hover:border-red-700 dark:text-neutral-0 dark:border-neutral-600 dark:hover:bg-red-500 dark:hover:text-neutral-900 dark:hover:border-red-500"
          type="button"
        >
          Remove
        </button>
        <div>
          <label className="toggle-button-label" htmlFor="toggle-btn-1">
            <input
              type="checkbox"
              className="toggle-button-checkbox"
              id="toggle-btn-1"
              checked={testData.isActive}
              aria-label="extension activity changer"
            />
          </label>
        </div>
      </div>
    </li>
  );
}
