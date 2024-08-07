import Link from "next/link";

export default function UpgradeBanner() {
  return (
    <div className="relative">
      <div className="size-20 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto absolute top-0 left-0 right-0  border-2 border-white"></div>
      <div className="w-full bg-gradient-to-r mt-11 space-y-2 from-violet-500 to-indigo-600 rounded-xl p-6">
        <h1 className="text-center text-white font-medium mt-3">
          Upgrade to PRO
        </h1>
        <p className="text-center text-sm text-white">
          Improve your development process and start doing more with Horizon UI
          PRO!
        </p>
        <div className="flex justify-center">
          <Link href={"/"} className="p-3 bg-violet-500 text-white rounded-lg">
            Upgrade to PRO
          </Link>
        </div>
      </div>
    </div>
  );
}
