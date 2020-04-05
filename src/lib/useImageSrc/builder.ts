import sanityImageUrlBuilder from '@sanity/image-url';

import { sanityClient } from '@app/src/lib/sanity-client';

export const imageUrlBuilder = sanityImageUrlBuilder(sanityClient);
