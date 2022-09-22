function FetchButton({ fetchSingleUser }) {
  return (
    <div className="empty-user" onClick={fetchSingleUser}>
      <div className="plus-sign-hor"></div>
      <div className="plus-sign-ver"></div>
    </div>
  );
}

export default FetchButton;
