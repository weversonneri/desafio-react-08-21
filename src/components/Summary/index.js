import React from 'react';
import { useServers } from '../../context/servers';
import './styles.css';

function Summary() {

  const {
    selectedServers,
    totalMemory,
    totalCPU,
    totalDisk
  } = useServers();

  return (
    <div className="summary-wrapper">
      <table className="summary-table">
        <tbody>
          <tr>
            <th>Servidores Selecionados</th>
            <td>
              {selectedServers.length > 0
                ? (selectedServers.length === 1
                  ? `${selectedServers.length} servidor selecionado`
                  : `${selectedServers.length} servidores selecionados`)
                : 'Nenhum servidor selecionado'}
            </td>
          </tr>
          <tr>
            <th>Total de Memória</th>
            <td>
              {selectedServers.length > 0
                ? `${totalMemory} GB`
                : '---'}
            </td>
          </tr>
          <tr>
            <th>Total de CPUs</th>
            <td>
              {selectedServers.length > 0
                ? `${totalCPU} vCPUs`
                : '---'}
            </td>
          </tr>
          <tr>
            <th>Total de Discos</th>
            <td>
              {selectedServers.length > 0
                ? `${totalDisk} GB`
                : '---'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Summary;
