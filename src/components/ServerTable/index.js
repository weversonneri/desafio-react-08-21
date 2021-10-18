import React, { useEffect, useState } from 'react';
import { useServers } from '../../context/servers';
import api from '../../services/api';
import './styles.css';

function ServerTable() {
  const [data, setData] = useState([]);

  const {
    selectedServers,
    totalSelectedServers,
    removeSelectedServer,
  } = useServers();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/servers');
      const dados = response.data;
      console.log("🚀 ~ file: index.js ~ line 19 ~ fetchData ~ dados", dados)

      setData(dados)
    }
    fetchData();
  }, [])

  return (
    <div className="server-wrapper">
      <table className="server-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Hostname</th>
            <th>Memória</th>
            <th>vCPUs</th>
            <th>Disco</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ?
            data.map((item) => (
              <tr key={item.id_vm}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        totalSelectedServers(item)
                      } else {
                        removeSelectedServer(item)
                      }
                    }}
                  />
                </td>
                <td>{item.hostname}</td>
                <td>{item.configuracao.memoryProvisioned} GB</td>
                <td>{item.configuracao.cpuProvisioned} vCPUs</td>
                <td>{item.configuracao.totalDiskGB} GB</td>
                <td>{item.configuracao.ip}</td>
              </tr>
            )) : (
              <tr>
                <td><input type="checkbox" /></td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default ServerTable;
