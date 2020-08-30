import React, {useMemo} from "react";
import {PlainInput} from "../formelements/PlainInput";
import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {TextareaInput} from "../formelements/TextareaInput";
import {MediaOfProductNewIndex} from "../media/MediaOfProductNewIndex";
import {ManufacturerOfProductNew} from "../manufacturer/ManufacturerForProductNew";
import {ActiveSubstanceForProductNew} from "../activesubstance/ActiveSubstanceForProductNew";
import {AdditiveSubstanceForProductNew} from "../additivesubstance/AdditiveSubstanceForProductNew";
import {AttributeForProductNew} from "../attribute/AttributeForProductNew";
import {CategoryPrimaryForProductNew} from "../category/CategoryPrimaryForProductNew";
import {CategorySecondaryForProductNew} from "../category/CategorySecondaryForProductNew";
import {PriceForProductNewIndex} from "../price/PriceForProductNewIndex";
import {Button, Col, Container, Row, Spinner} from "reactstrap";

const ProductNew: React.FC = () => {

    const formState = useMemo(() => {
        return new ProductNewFormState(new Product())
    }, []).use()
    const product = formState.model

    return <Container className={`ProductNew`}>
        <h3 className="text-center">
            Create new product
        </h3>
        <Row className="justify-content-center form-block">
            <Col lg={6}>
                <PlainInput
                    formState={formState}
                    model={product}
                    label={'Product name'}
                    property={asKeyOf<Product>('productName')}
                    validate={formState.validateProductName}
                />
            </Col>
        </Row>
        <Row className="justify-content-center form-block">
            <Col lg={4}>
                <PlainInput
                    formState={formState}
                    model={product}
                    label={'Brand'}
                    property={asKeyOf<Product>('brand')}
                    validate={formState.validateBrand}
                />
            </Col>
        </Row>
        <TextareaInput
            formState={formState}
            model={product}
            label={'Short description'}
            property={asKeyOf<Product>('descriptionShort')}
            validate={formState.validateDescriptionShort}
        />
        <Row className="form-block">
            <Col lg={3}>
                <PlainInput
                    formState={formState}
                    model={product}
                    label={'Product identifier'}
                    property={asKeyOf<Product>('uid')}
                    validate={formState.validateUid}
                />
            </Col>
            <Col lg={3}>
                <PlainInput
                    formState={formState}
                    model={product}
                    label={'PZN'}
                    property={asKeyOf<Product>('pzn')}
                    validate={formState.validatePzn}
                />
            </Col>
            <Col lg={3}>
                <PlainInput
                    formState={formState}
                    model={product}
                    label={'Pack size'}
                    property={asKeyOf<Product>('packSize')}
                    validate={formState.validatePackSize}
                />
            </Col>
            <Col lg={3}>
                <PlainInput
                    formState={formState}
                    model={product}
                    label={'Pharma form'}
                    property={asKeyOf<Product>('pharmaForm')}
                    validate={formState.validatePharmaForm}
                />
            </Col>
        </Row>
        <Row className="form-block justify-content-center">
            <Col>
                <MediaOfProductNewIndex
                    formState={formState}
                    product={product}
                    medias={product.images}
                />
            </Col>
        </Row>
        <Row className="form-block justify-content-center">
            <PriceForProductNewIndex
                formState={formState}
                product={product}
            />
        </Row>
        <Row className="form-block">
            <Col lg={6}>
                <CategoryPrimaryForProductNew formState={formState} product={product}/>
            </Col>
            <Col lg={6}>
                <CategorySecondaryForProductNew formState={formState} product={product}/>
            </Col>
        </Row>
        <Row className="form-block">
            <Col lg={6}>
                <ManufacturerOfProductNew formState={formState} product={product}/>
            </Col>
            <Col lg={6}>
                <ActiveSubstanceForProductNew formState={formState} product={product}/>
            </Col>
        </Row>
        <Row className="form-block">
            <Col lg={6}>
                <AdditiveSubstanceForProductNew formState={formState} product={product}/>
            </Col>
            <Col lg={6}>
                <AttributeForProductNew formState={formState} product={product}/>
            </Col>
        </Row>
        <Row className="justify-content-center form-block">
            <Button
                className={"mainSubmitBtn"}
                color={formState.model.isValid() ? 'success' : 'danger'}
                onClick={formState.submit}
            >
                {formState.model.isValid()
                    ? `Submit`
                    : 'Correct errors to submit'
                }
                {formState.submitInProgress && <Spinner/>}
            </Button>
        </Row>
    </Container>
}

export {ProductNew}