import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bgLayout from './assets/Layout/bg1.jpg'

const titleText = "Title text";
const text = "text";
const color = "#fafafa";

const App = () => {
    return (
        <>
            <Header 
            title={titleText}
            descr={text}
            />

            <Layout
            title={titleText}
            desc={text}
            urlBg={bgLayout}
            />
            
            <Layout
            title={titleText}
            desc={text}
            colorBg={color}
            />

            <Layout
            title={titleText}
            desc={text}
            urlBg={bgLayout}
            />

            <Footer />

        </>
   );
}

export default App;
