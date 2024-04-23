export default function Footer() {
  return (
    <footer className="footer">
      <small>
        <p>{getCurrentYear()} React demo app</p>
      </small>

      <p>
        <span className="u-bold">109573</span> total jobs available
      </p>
    </footer>
  );
}

function getCurrentYear() {
  return new Date().getFullYear();
}
