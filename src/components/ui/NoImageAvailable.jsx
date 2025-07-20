import { FaImage } from "react-icons/fa";
import { useLanguage } from "../../hooks/useLanguage";


export default function NoImageAvailable() {
  const { t } = useLanguage();
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center bg-gray-200 border border-dashed border-gray-400 rounded-xl">
      <FaImage
      size={100}
      />
      <span className="text-gray-500 text-lg font-semibold select-none">
        {t.common.notImage}
      </span>
    </div>
  );
}