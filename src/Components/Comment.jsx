function Comment(props) {
  const { texto, second, createdAt } = props.msg;
  const date = createdAt.toDate().toString();
  return (
    <div className="comment">
      <p><span>Texto: </span>{texto}</p>
      <p><span>Segundo: </span>{second}</p>
      <p><span>Fecha: </span>{date}</p>
    </div>
  );
}

export default Comment;
