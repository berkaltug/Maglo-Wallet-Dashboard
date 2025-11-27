import magloLogo from '../assets/maglo-logo.svg';

const MagloLogo = () => {
  return (
    <div className="flex items-center">
      <img src={magloLogo} className="w-7.5 h-7.5" alt="maglo logo" />
      <span className="font-(Gordita) font-bold text-lg m-2">Maglo.</span>
    </div>
  );
};

export default MagloLogo;
