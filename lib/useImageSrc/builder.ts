import sanityImageUrlBuilder from '@sanity/image-url';

import { sanityClient } from '@app/lib/sanity-client';

export const imageUrlBuilder = sanityImageUrlBuilder(sanityClient);
