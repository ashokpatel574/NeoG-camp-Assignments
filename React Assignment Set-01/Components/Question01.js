// Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

// The colour of “Designation:” should be green.
// The colour of “Experience:” should be blue.

const displayColor = function (item) {
  if (item === `designation`) {
    return { color: `green` };
  }

  if (item === `experience`) {
    return { color: `blue` };
  }
};

const EmployeeCard = ({ employeeCardData }) => {
  return (
    <>
      <h2>Answer - 01</h2>
      <ul>
        {Object.entries(employeeCardData).map((data, id) => (
          <li key={id} style={displayColor(data[0])}>
            {data[0]} : {data[1]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EmployeeCard;
