import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ExtensionsContext = createContext();

function ExtensionsProvider({ children }) {
  const [extensions, setExtensions] = useState([]);

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

  return (
    <ExtensionsContext.Provider
      value={{
        extensions,
        handleRemoveExtension,
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
