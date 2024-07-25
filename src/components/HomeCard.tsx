type HomeCardProps = {
  id: number;
  imgUrl: string;
  label: string;
  text: string;
};

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL ?? '';

if (!apiBaseUrl) {
  throw new Error("API base URL is not defined. Please set the REACT_APP_API_BASE_URL environment variable.");
}

export default function HomeCard({ id, imgUrl, label, text }: HomeCardProps) {
  return (
    <div className="flex justify-center">
      <div className="relative w-96 h-96 overflow-hidden drop-shadow-lg">
        <div className="relative h-full w-full">
          <img
            className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-125"
            src={`${apiBaseUrl.replace("/api", "")}/${imgUrl}`}
            alt="Holiday destination"
          />
          <div className="absolute bottom-20 left-4 bg-sky-400 rounded-t w-28 h-8 flex items-center justify-center z-10">
            <p className="text-zinc-900 font-semibold">{label}</p>
          </div>
        </div>
        <div className="bg-zinc-900 h-20 rounded-b absolute bottom-0 left-0 w-full flex items-center justify-center z-10">
          <p className="text-white text-lg text-center px-10">{text}</p>
        </div>
      </div>
    </div>
  );
}
