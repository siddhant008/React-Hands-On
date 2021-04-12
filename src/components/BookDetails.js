function BookDetails(props) {
  return (
    <div>
      <h1>Book Details</h1>
      <ul>
        {props.bookList.map((b) => {
          return (
            <div key={b.id}>
              <h2>{b.name}</h2>
              <h4>{b.price}</h4>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default BookDetails;
