import Image from "next/image";
import Initio from "../assets/initio.png";
function Logo({ size }) {
  return (
    <>
      <div className="relative rounded" style={{ width: size }}>
        <img alt="logo" src={Initio.src} layout="fill" />
      </div>
      <p className="logo text-3xl p-2 font-extrabold">
        Initio<span className="primary"> Solutions</span>
      </p>
    </>
  );
}

export default Logo;
