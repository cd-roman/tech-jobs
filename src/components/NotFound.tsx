export default function NotFound() {
  return (
    <div className="not-found">
      <div className="job-details__start-view center-align-text">
        <h1 className="not-found-title">Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <a className="back-home-button"
          href="/"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
