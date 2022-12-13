import Initio from "../assets/initio.png";
function Logo({ size }) {
  return (
    <>
      <img alt="logo" src={Initio.src} width={size} className="rounded" />
      <p className="logo text-3xl p-2 font-extrabold">
        Initio<span className="primary"> Solutions</span>
      </p>
    </>
  );
}

export default Logo;
