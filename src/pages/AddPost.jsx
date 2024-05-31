import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
        <Link href="/" color="teal.500" fontSize="lg">Back to Home</Link>
      </VStack>
    </Container>
  );
};

export default AddPost;