import React, {useEffect, useState} from "react";
import {Product} from "../../models/Product";
import {CardImg, Col, Container, Media, Row, Spinner} from "reactstrap";

const ProductDetailShow: React.FC<{
    productId: any
}> = ({productId}) => {

    const [product, setProduct] = useState<Product>()

    const loadProduct = async () => {
        let product = await Product.show({wilds: {id: productId}})
        setProduct(product)
    }

    useEffect(()=>{
        loadProduct()
    }, [])


    if (!product) {
        return <Spinner/>
    }

    let discount = product.getDiscountPercent()

    return <Container className="ProductDetailShow">
        <Row className="titleRow">
            <Col lg={12}>
                <Row>
                    <Col lg={12}>
                        <h1 className="productName">{product.productName}</h1>
                    </Col>
                    <Col lg={12}>
                        <div className="attributes">
                            {product.attributes.array.map((it)=>{
                                return <span key={it.value} className="attribute">{it.value}</span>
                            })}
                        </div>
                    </Col>
                </Row>
            </Col>

        </Row>
        <Row className="imageRow">
            <Col lg={5}>
                <div className="image">
                    <CardImg src={product.getFirstImagePath()}/>
                </div>
            </Col>
            <Col lg={7}>
                <div className={"priceTabHeaderRow"}>
                    <div/>
                    <div className="listPrice">AVP/UVP</div>
                    <div className="retailPrice">your price</div>
                    <div className="discountAmount">Discount</div>
                </div>
                <div className="priceTab">
                    <div className="packSize">
                        {product.packSize}
                    </div>
                    <div className="listPrice">
                        {product.getListPrice()?.getFormattedValue()}
                    </div>
                    <div className="retailPrice">
                        {product.getRetailPrice()?.getFormattedValue()}
                    </div>
                    <div className="discountAmount">
                        <span>-{discount ?? null}%</span>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="factsRow">
                <div className="fact">
                    <p className="factName">
                        PZN
                    </p>
                    <p className="factValue">
                        {product.pzn}
                    </p>
                </div>
                <div className="fact">
                    <p className="factName">
                        Pharma form
                    </p>
                    <p className="factValue">
                        {product.pharmaForm}
                    </p>
                </div>
                <div className="fact">
                    <p className="factName">
                        Brand
                    </p>
                    <p className="factValue">
                        {product.brand}
                    </p>
                </div>
                <div className="fact">
                    <p className="factName">
                        Pharma form
                    </p>
                    <p className="factValue">
                        {product.pharmaForm}
                    </p>
                </div>
                <div className="fact">
                    <p className="factName">
                        Manufacturer
                    </p>
                    <p className="factValue">
                        {product.manufacturer.array[0]?.value}
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="productDescription">
                {product.descriptionShort}
            </Col>
        </Row>
        <Row className={"substances"}>
            <Col lg={6}>
                <h3>Active substances</h3>
                <ul>
                    {product.activeSubstances.array.map((it)=>{
                        return <li>{it.value}</li>
                    })}
                </ul>
            </Col>
            <Col lg={6}>
                <h3>Additive substances</h3>
                <ul>
                    {product.additiveSubstances.array.map((it)=>{
                        return <li>{it.value}</li>
                    })}
                </ul>
            </Col>
        </Row>
    </Container>

}

export {ProductDetailShow}