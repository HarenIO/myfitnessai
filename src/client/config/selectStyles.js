export default {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderColor: 'transparent',
    cursor: 'pointer',
    boxShadow: 'none',
    backdropFilter: 'blur(10px)',
    borderRadius: '5px',
    '&:hover': {
      borderColor: 'transparent',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'rgba(200, 200, 200, 0.5)'
      : state.isFocused
      ? 'rgba(40, 40, 40, 0.7)'
      : 'rgba(20, 20, 20, 0.7)',
    color: state.isSelected ? 'black' : 'white',
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(90, 89, 89, 0.5)',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'white',
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '5px',
  }),
}