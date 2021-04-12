function BlogDetails(props) {
  return (
    <div>
      <h1>Blog Details</h1>
      <ul>
        {props.blogList.map((b) => {
          return (
            <div key={b.id}>
              <h2>{b.name}</h2>
              <h4>{b.author}</h4>
              <p>{b.desc}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogDetails;
