import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card className="mb-3">
        <CardImg top width="100%" src={props.imgLink} alt={props.title} />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
          <CardText>{props.copy}</CardText>
          <a href={props.githublink} target="_blank" className="btn btn-dark btn-block">View</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;