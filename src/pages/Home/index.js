import DefaultLayout from '../../components/DefaultLayout';
import ServerTable from '../../components/ServerTable';
import Summary from '../../components/Summary';
import Card from '../../components/Card';

function Home() {
  return (
    <DefaultLayout>
      <Card
        title="Sumário dos recursos dos servidores"
      >
        <Summary />
      </Card>

      <Card
        title="Tabela de servidores"
      >
        <ServerTable />
      </Card>
      {/* <p>
        Este é o desafio para seleção para desenvolvedores Front-End React JS.
        Você deve construir uma página de exibição de dados de servidores conforme o modelo apresentado no Figma.
        Não é necessário construir a página com fidelidade total de estilização, pois, o mais importante para nós é conhecer a sua habilidade e domínio da biblioteca React, contudo, se você conseguir ser fiel ao modelo do Figma isso será considerado um plus.
      </p> */}
    </DefaultLayout>
  );
}

export default Home;