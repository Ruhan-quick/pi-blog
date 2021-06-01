import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";

const BlogForm = () => {
  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
    article: "",
    tags: "",
    authorName: "",
    category: "",
    blogType: "",
    blogCover: "",
    likes: 0,
    comments: "",
  });
  const handleBlur = () => {
    const newBlog = { ...blog };
    newBlog.title = document.getElementById("title").value;
    newBlog.subTitle = document.getElementById("subTitle").value;
    newBlog.article = document.getElementById("article").value;
    newBlog.authorName = document.getElementById("authorName").value;
    newBlog.category = document.getElementById("category").value;
    setBlog(newBlog);
    //console.log(blog);
  };

  const onPost = () => {
    const newBlog = { ...blog };
    newBlog.title = document.getElementById("title").value;
    newBlog.subTitle = document.getElementById("subTitle").value;
    newBlog.article = document.getElementById("article").value;
    newBlog.authorName = document.getElementById("authorName").value;
    newBlog.category = document.getElementById("category").value;
    setBlog(newBlog);
    postNow();
  };

  const postNow = () => {
    fetch("https://guarded-stream-40071.herokuapp.com/addBlog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then((res) => {
      console.log("server side response: ", res);
      alert("Post Successful");
    });
  };

  const handleImageUpload = (event) => {
    //console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7898c87b25e0dcb3d9e11ef7ce79a7af");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        console.log(res.data.data.display_url);
        alert("img uploaded successfully");
        const newBlog = { ...blog };
        newBlog.blogCover = res.data.data.display_url;
        setBlog(newBlog);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              id="title"
              onBlur={handleBlur}
              required
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              onBlur={handleBlur}
              id="subTitle"
              type="text"
              placeholder="Subtitle"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Blog</Form.Label>
          <Form.Control
            onBlur={handleBlur}
            id="article"
            required
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tags</Form.Label>
          <Form.Control
            onBlur={handleBlur}
            id="tags"
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Author Name</Form.Label>
            <Form.Control onBlur={handleBlur} id="authorName" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Control onBlur={handleBlur} id="category" as="select">
              <option>Select..</option>
              <option>All</option>
              <option>News</option>
              <option>Tech</option>
              <option>Health</option>
              <option>Food</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Image</Form.Label>
            <Form.Control onChange={handleImageUpload} type="file" />
          </Form.Group>
        </Form.Row>

        {/* <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Authority will collect info about you."
            required
          />
        </Form.Group> */}

        <Button onClick={onPost} variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
