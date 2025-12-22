// display html content with prevent XSS attacks

//use to clean HTML content
// DOMPurify removes dangetous code g=before rendering HTML
import DOMPurify from "dompurify";

// recieve props and {html} is destructing by equalent to props.html
function SafeHtml({ html }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html),
      }}
    />
  );
}

export default SafeHtml;
