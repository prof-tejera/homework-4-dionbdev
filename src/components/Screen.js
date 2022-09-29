const Screen = ({ result, nums, operator, secondNums}) => {

  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 70,
        textAlign: "right",
        marginBottom: 10,
        color: 'blue',
      }}
    >
      {nums} {operator}  {secondNums} equals {result}
    </div>
  );
};

export default Screen;
