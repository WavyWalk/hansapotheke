import {App} from "../App";

class MediaRepository {

    createDirectLinkTypedImage = async (imageLink?: string) => {
        if (!imageLink) {
            return null
        }
        return await App.prisma.media.create({
            data: {
                driver: 'DIRECT_LINK',
                mediaType: 'IMAGE',
                path: imageLink
            }
        })
    }

}

export const mediaRepository = new MediaRepository()