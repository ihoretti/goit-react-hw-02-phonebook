import PropTypes from 'prop-types';
import { FilterIntput, FilterTitle } from './Filter.styled';

export const Filter = ({ title, filter, handleFindContact }) => {
  return (
    <>
      <FilterTitle>{title}</FilterTitle>
      <FilterIntput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFindContact}
      />
    </>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  handleFindContact: PropTypes.func.isRequired,
};
