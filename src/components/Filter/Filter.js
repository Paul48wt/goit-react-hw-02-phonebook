export const Filter = ({ filter, onChange }) => {
  return (
    <label className="label">
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
