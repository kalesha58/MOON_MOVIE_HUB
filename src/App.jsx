import { Container } from "@material-ui/core";
// import Search from "@mui/icons-material/Search";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import SimpleBottomNavigation from "./Component/MainNav";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
