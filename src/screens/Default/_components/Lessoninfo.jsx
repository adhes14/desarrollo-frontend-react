const Lessoninfo = ({ unit, text }) => {
  return (
    <div>
      <p>
        <b><span>{unit}</span></b>: {text}
      </p>
    </div>
  );
};

export default Lessoninfo;