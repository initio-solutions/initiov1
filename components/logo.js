import Image from "next/image";
import Initio from "../assets/initio.png";
function Logo({ size }) {
  return (
    <>
      <div className="relative rounded" style={{ width: size }}>
        <Image width={100} height={100} alt="logo" src={Initio.src} />
      </div>
      <p className="logo text-3xl p-2 font-extrabold">
        Initio<span className="primary"> Solutions</span>
      </p>
    </>
  );
}

export default Logo;
