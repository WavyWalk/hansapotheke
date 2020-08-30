import {algoliaProductIndexer} from "../algolia/usecase/algoliaProductIndexer";

class AlgoliaIndexer {

    run = async () => {
        await algoliaProductIndexer.run()
    }

}

export const algoliaIndexer = new AlgoliaIndexer()