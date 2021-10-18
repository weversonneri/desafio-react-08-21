import React, { createContext, useContext, useState } from 'react';

const ServersContext = createContext();

function ServersProvider({ children }) {
  const [selectedServers, setSelectedServers] = useState([]);

  const totalSelectedServers = (item) => setSelectedServers((curr) => [...curr, item]);

  const removeSelectedServer = (item) => {
    const filter = selectedServers.filter((server) => server.id_vm !== item.id_vm);
    setSelectedServers(filter);
  }

  const totalMemory = selectedServers.reduce((accum, { configuracao }) => accum + configuracao.memoryProvisioned, 0);
  const totalCPU = selectedServers.reduce((accum, { configuracao }) => accum + configuracao.cpuProvisioned, 0);
  const totalDisk = selectedServers.reduce((accum, { configuracao }) => accum + configuracao.totalDiskGB, 0);

  return (
    <ServersContext.Provider
      value={{
        selectedServers,
        totalSelectedServers,
        removeSelectedServer,
        totalMemory,
        totalCPU,
        totalDisk
      }}
    >
      {children}
    </ServersContext.Provider>
  );
}

const useServers = () => useContext(ServersContext);

export { ServersProvider, useServers };