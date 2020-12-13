import AJV from 'ajv';

import mockReportFilmCinema from './__data__/report-film-cinema.json';
import filmsSchema from '.';

describe('json schema', () => {
  it('validates a film from a cinema', () => {
    const ajv = new AJV({ allErrors: true });
    const validate = ajv.compile(filmsSchema);
    const result = validate(mockReportFilmCinema);

    const expected = true;
    expect(result).toBe(expected);
  });
});
