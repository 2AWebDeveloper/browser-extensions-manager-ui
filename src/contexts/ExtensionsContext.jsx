import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ExtensionsContext = createContext();

function ExtensionsProvider({ children }) {
  const [extensions, setExtensions] = useState([]);
  const [filterBy, setFilterBy] = useState("All");

  useEffect(function () {
    async function getExtensions() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) return;
        const data = await response.json();
        setExtensions(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getExtensions();
  }, []);

  function handleRemoveExtension(extensionName) {
    setExtensions((extensions) =>
      extensions.filter((extension) => extension.name !== extensionName),
    );
  }
  function handleChangeExtensionActivity(extensionName) {
    setExtensions((extensions) =>
      extensions.map((extension) =>
        extension.name === extensionName
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  }

  return (
    <ExtensionsContext.Provider
      value={{
        extensions,
        filterBy,
        handleRemoveExtension,
        handleChangeExtensionActivity,
        setFilterBy,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
}

function useExtensions() {
  const context = useContext(ExtensionsContext);
  return context;
}

export { ExtensionsProvider, useExtensions };
