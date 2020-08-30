import {GlobalSearchState} from "../../states/GlobalSearchState";
import React from "react";
import {algoliaConfigData, getSearchClient} from "../../algolia/algoliaConfig";
import { Configure, InstantSearch, Pagination, SearchBox } from "react-instantsearch-dom";
import {Col, Row} from "reactstrap";
import {CurrentRefinements, sanitizeLabel} from "../facets/CurrentRefinements";
import {ProductGlobalSearchHitsIndex} from "./ProductGlobalSearchHitsIndex";
import {ProductGlobalSearchFacetsIndex} from "./ProductGlobalSearchFacetsIndex";

const ProductGlobalSearch: React.FC = () => {

    GlobalSearchState.instance.use()

    return <InstantSearch
        indexName={algoliaConfigData.indexName}
        searchClient={getSearchClient()}
        searchState={GlobalSearchState.instance.searchState}
        onSearchStateChange={GlobalSearchState.instance.onSearchStateChange}
    >
        <Configure
            hitsPerPage={10}
            maxValuesPerFacet={500}
        />
        <Row>
            <div>
                <h1>
                    TO LOGIN AS ADMIN: create account or login with admin@doe.com 123
                </h1>
                <h1>
                    than navigate to create new product
                </h1>
            </div>
        </Row>
        <Row className="search-box">
            <SearchBox/>
        </Row>
        <Row className="refinements-box">
            <CurrentRefinements
                clearsQuery={false}
                transformItems={(e: any) => {
                    e.map((it: any) => {
                        it.label = sanitizeLabel(it.label)
                    })
                    return e
                }}
            />
        </Row>
        <Row>
            <Col lg={4}
                 className="facets-sidebar"
            >
                {<ProductGlobalSearchFacetsIndex/>}
            </Col>
            <Col lg={8}>
                <Pagination/>
                <ProductGlobalSearchHitsIndex/>
                <Pagination/>
            </Col>
        </Row>
    </InstantSearch>

}

export {ProductGlobalSearch}