import React from "react";
import { Result } from "./Article";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface ArticleItemProps {
  article: Result;
}

function ArticleItem({ article }: ArticleItemProps) {
  return (
    <Col xs={6} className="mx-auto">
      <Card className="mb-4">
        <Card.Img variant="img-fluid top" src={article.image_url} alt={article.title} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
        </Card.Body>
        <Card.Footer>{article.published_at.toString()}</Card.Footer>
      </Card>
    </Col>
  );
}

export default ArticleItem;
