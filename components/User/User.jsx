function User({ user, index, isRefreshing, refreshUser }) {
  return (
    <div className="image" key={user.id} onClick={() => refreshUser(index)}>
      {/* Overylay */}
      <div className="image__overlay">
        <img src="/001-refresh.svg" className={`${isRefreshing && 'image__animation'}`} alt="" />
      </div>
      <img src={user.url} width={240} height={240} />
    </div>
  );
}

export default User;
