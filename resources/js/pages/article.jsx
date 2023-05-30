import ReactDOM from "react-dom/client";
import ArticleView from "../components/Article/ArticleView";

const Article = () => {
    return (
        <>
            <ArticleView />
        </>
    );
};
export default Article;

ReactDOM.createRoot(document.getElementById("app")).render(<Article />);
