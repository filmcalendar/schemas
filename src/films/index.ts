import availability from './availability.def-schema.json';
import collection from './collection.def-schema.json';
import film from './film.def-schema.json';
import page from './page.def-schema.json';
import provider from './provider.def-schema.json';
import schema from './films.schema.json';
import session from './session.def-schema.json';
import sessionAttribute from './session-attribute.def-schema.json';

export default {
  ...schema,
  definitions: {
    availability,
    collection,
    film,
    page,
    provider,
    session,
    sessionAttribute,
  },
};
