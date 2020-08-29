import {ModelCollection} from "../../libs/frontmodel/src";
import {Media} from "../../models/Media";
import * as React from "react";
import {asKeyOf} from "../../libs/typeutils/asKeyOf";
import {Button, Card, CardBody, CardImg, Col, Row} from "reactstrap";
import {MediaDirectLinkNew} from "./MediaDirectLinkNew";
import {PrimaryModal} from "../modal/PrimaryModal";
import {ProductNewFormState} from "../../states/ProductNewFormState";
import {Product} from "../../models/Product";

const MediaOfProductNewIndex: React.FC<{
    formState: ProductNewFormState,
    product: Product
    medias: ModelCollection<Media>
}> = ({formState, product, medias}) => {

    const imagesPresentError = product.getFirstErrorFor('images')

    return <div className={`MediaOfProductNewIndex`}>
        <div>
            <h3>Images</h3>
        </div>
        <Row>
            {medias.array.length === 0
                && <Col lg={12}>
                    <p>No images yet assigned</p>
                </Col>
            }
            {imagesPresentError &&
                <Col lg={12}>
                    <div className={'isInvalid'}>
                        {imagesPresentError}
                    </div>
                </Col>
            }
        </Row>
        <Row>
            {medias.array.map((media)=>{
                return <Col lg={3}>
                    <Card>
                        {(media.path && !media.getErrorsFor(asKeyOf<Media>('path')))
                        && <CardImg src={media.path} alt=""/>
                        }
                        <CardBody>
                            <div className="button-row">
                                <Button
                                    color={'danger'}
                                    onClick={()=>formState.onMediaDelete(media)}
                                >
                                    delete
                                </Button>
                                <Button
                                    color={'primary'}
                                    onClick={()=>formState.onMediaEdit(media)}
                                >
                                    edit
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            })}
        </Row>
        <Col>
            <div className="addNewButton d-flex justify-content-center">
                <Button
                    size={'sm'}
                    color={'primary'}
                    onClick={()=>formState.initializeNewImage()}
                >
                    Add new image +
                </Button>
            </div>
        </Col>
        <PrimaryModal
            isOpen={formState.imageIsInCrudMode}
            onClose={()=> {
                formState.onImageModalClose()
            }}
        >
            <MediaDirectLinkNew
                existingMedia={formState.currentlyEditedImage}
                onSubmit={(media)=>formState.onMediaSubmit(media)}
            />
        </PrimaryModal>
    </div>
}

export {MediaOfProductNewIndex}