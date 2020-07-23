import React, { Component } from 'react'
import Data from '../Data';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

export default class About extends Component {

    render() {
        return (
            <div>
                <h2>เกี่ยวกับเรา</h2>
                {
                    Data.products.map(product =>
                        <div>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <CardImg src={product.image} />
                                        <CardBody>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardSubtitle>{product.price}</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }

            </div>
        )
    }
}