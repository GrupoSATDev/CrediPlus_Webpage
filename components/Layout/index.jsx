import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import ButtonBook from '@/components/ButtonBook';

const Layout = ({ children }) => {
   
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;