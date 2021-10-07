import Header from '../Header';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div >
        {children}
      </div>
    </>
  );
}

export default DefaultLayout;
