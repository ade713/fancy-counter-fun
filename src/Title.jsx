export function Title({ locked }) {
  return (
    <h1 className="title">
      { locked ? 
        <span>
          Limit! Buy <b>Pro</b> for &gt;10
        </span>
        :
        "Fancy Counter"
      }
    </h1>
  );
}
