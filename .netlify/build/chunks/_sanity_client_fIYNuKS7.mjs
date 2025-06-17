import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-12-10","projectId":"c526691m","dataset":"production","useCdn":false}
          );

export { sanityClient as s };
