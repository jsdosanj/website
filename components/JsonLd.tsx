/**
 * Emits a JSON-LD block. Kept as one component so the serialization and the
 * one necessary `dangerouslySetInnerHTML` live in a single reviewed place
 * rather than being repeated per page.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const nodes = Array.isArray(data) ? data : [data];
  return (
    <>
      {nodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- authored data, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}
