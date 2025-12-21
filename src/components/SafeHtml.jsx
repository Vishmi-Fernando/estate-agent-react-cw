import DOMPurify from "dompurify";

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
