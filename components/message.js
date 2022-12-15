import { TiTick } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
function Message({ error, text }) {
  return (
    <div
      className={`${error ? "bg-red-200" : "bg-green-200"} ${
        error ? "border-red-500" : "border-green-500"
      } border p-2 rounded flex text-center mx-auto`}
    >
      {error ? (
        <GrClose className="text-2xl rounded mr-2" />
      ) : (
        <TiTick className="text-2xl rounded mr-2" />
      )}
      <p className="text-base">{text}</p>
    </div>
  );
}

export default Message;
