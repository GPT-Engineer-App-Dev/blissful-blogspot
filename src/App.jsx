import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Box, Button, useColorMode } from "@chakra-ui/react";

function App() {
  const [posts, setPosts] = useState([]);

  const { colorMode, toggleColorMode } = useColorMode();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <Box p={4}>
        <Button onClick={toggleColorMode} mb={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Routes>
          <Route exact path="/" element={<Index posts={posts} />} />
          <Route path="/add-post" element={<AddPost addPost={addPost} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
