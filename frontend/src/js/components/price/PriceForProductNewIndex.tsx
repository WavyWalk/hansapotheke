import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";
import React from "react";
import {PriceNew} from "./PriceNew";
import {Col, Row} from "reactstrap";

const PriceForProductNewIndex: React.FC<{
    formState: ProductNewFormState,
    product: Product
}> = ({formState, product}) => {

    const listPrice = product.getListPrice()!
    const retailPrice = product.getRetailPrice()!

    return <Row>
        <Col lg={6}>
            <PriceNew
                label={'Retail price'}
                price={retailPrice}
                formState={formState}
                product={product}
            />
        </Col>
        <Col lg={6}>
            <PriceNew
                label={'List price'}
                price={listPrice}
                formState={formState}
                product={product}
            />
        </Col>
    </Row>

}

export {PriceForProductNewIndex}