// The server's answer to the error code in the name.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-response">
        <p className="footer-mark" aria-hidden="true">418</p>
        <div className="footer-reply">
          <p>I'm a teapot.</p>
          <p className="footer-note">The server refuses to brew coffee. RFC 2324.</p>
        </div>
      </div>
    </footer>
  )
}
