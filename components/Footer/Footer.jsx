function Footer({ refreshAllUsers }) {
  return (
    <footer className="footer">
      <button className="refresh-btn" onClick={refreshAllUsers}>
        Refresh All
      </button>
    </footer>
  );
}

export default Footer;
