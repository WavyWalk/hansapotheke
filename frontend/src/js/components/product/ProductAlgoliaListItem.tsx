import {Product} from "../../models/Product";
import React from "react";
import {Card, CardBody, CardImg, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

const ProductAlgoliaListItem: React.FC<{
    product: Product
}> = ({product}) => {

    const discountPercent = product.getDiscountPercent()

    return <div className="ProductAlgoliaListItem">
        <Row>
            <Col lg={3}>
                <Card>
                    <CardImg src={product.getFirstImagePath()}/>
                </Card>
                <CardBody>
                    <div className={"discountDisclaimer"}>
                        {discountPercent && <span>-{discountPercent}%</span>}
                    </div>
                </CardBody>
            </Col>
            <Col lg={6}>
                <Link to={`/product/${product.id}`}>
                    <h3 className="productName">
                        {product.productName}
                    </h3>
                </Link>
                <div className="productDescription">
                    {product.descriptionShort}
                </div>
                <div className="productProperties">
                    {product.attributes.map((it)=>{
                        return <span className="attribute" key={it.value}>{it.value}</span>
                    })}
                </div>
                <div className="productListFacts">
                    <p>
                        <span>{product.packSize} | {product.pharmaForm}</span>
                    </p>
                    <p>
                        PZN: {product.pzn}
                    </p>
                    <p>
                        {product.manufacturer.array[0]?.value}
                    </p>
                </div>
            </Col>
            <Col lg={3}>
                <div className="productPriceGroup">
                    {discountPercent &&
                        <span className="listPrice">
                            {product.getListPrice()?.getFormattedValue()}
                        </span>
                    }
                    <span className="priceRetail">
                        {product.getRetailPrice()?.getFormattedValue()}
                    </span>
                </div>
            </Col>
        </Row>
    </div>
}

export {ProductAlgoliaListItem}