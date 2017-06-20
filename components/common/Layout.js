import Header from './Header';

const layoutStyle = {
    padding: '0 10px',
    fontFamily: 'Helvetica'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        { props.children }
    </div>
);

export default Layout;
