import schema from './cinemas.schema.json';
import film from './film.def-schema.json';
import page from './page.def-schema.json';
import sessionAttribute from './session-attribute.def-schema.json';
import session from './session.def-schema.json';
import venue from './venue.def-schema.json';

export default {
  ...schema,
  definitions: {
    film,
    page,
    session,
    sessionAttribute,
    venue,
  },
};
