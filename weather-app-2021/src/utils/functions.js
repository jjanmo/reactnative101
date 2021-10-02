import countries from './countries.json';

export const getCountry = code => {
  const filtered = countries.filter(
    country => country.country_code === code,
  )[0];

  return filtered.country_name.toUpperCase();
};
