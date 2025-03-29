import { useExtensions } from "../contexts/ExtensionsContext";
import ExtensionsItem from "./ExtensionsItem";

export default function ExtensionsList() {
  const { extensions, filterBy } = useExtensions();
  const filteredExtensions =
    filterBy === "Active"
      ? extensions.filter((extension) => extension.isActive === true)
      : filterBy === "Inactive"
      ? extensions.filter((extension) => extension.isActive === false)
      : extensions;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6 mb-14">
      {filteredExtensions.map((extension, index) => (
        <ExtensionsItem
          key={extension.name}
          index={index}
          extension={extension}
        />
      ))}
    </ul>
  );
}
