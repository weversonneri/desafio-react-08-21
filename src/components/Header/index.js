import bb from '../../assets/bb.jpeg';
import './styles.css';

function Header() {
  return (
    <nav className="navbar navbar-bb fixed-top flex-md-nowrap bg-bb">
      <div className="navbar-item-1">
        <img src={bb} className="logo-bb" alt="bb" />
      </div>
      <div className="navbar-item-2">
        <h3>Desafio BB - Exposição de dados de servidores em Datatable</h3>
      </div>
    </nav>
  );
}

export default Header;