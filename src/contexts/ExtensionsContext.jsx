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

  return (
    <ExtensionsContext.Provider
      value={{
        extensions,
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
