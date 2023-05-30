import ReactDOM from "react-dom/client";
import ArticleView from "../components/Article/ArticleView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleFind from "../components/Article/ArticleFind";

const ArticlePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/article" element={<ArticleView />} />
                <Route path="/article/view/:id" element={<ArticleFind />} />
            </Routes>
        </BrowserRouter>
    );
};
// export default ArticlePage;

ReactDOM.createRoot(document.getElementById("app")).render(<ArticlePage />);
