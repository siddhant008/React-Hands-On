function CourseDetails(props) {
  return (
    <div>
      <h1>Course Details</h1>
      <ul>
        {props.courseList.map((c) => {
          return (
            <div key={c.id}>
              <h2>{c.name}</h2>
              <h4>{c.date}</h4>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseDetails;
