import ExtensionsItem from "./ExtensionsItem";

export default function ExtensionsList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6 mb-14">
      <ExtensionsItem />
    </ul>
  );
}
