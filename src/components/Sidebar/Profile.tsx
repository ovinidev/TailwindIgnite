import { Logout } from "../Icons";

export function Profile() {
  return (
    <div className="flex content-center items-center gap-3">
      <img
        src="https://github.com/ovinidev.png"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vinícius Medeiros
        </span>
        <span className="truncate text-sm font-normal text-zinc-500">
          vinimedeiros@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto self-start rounded-md p-2 duration-150 ease-in hover:bg-zinc-50"
      >
        <Logout className="text-xl text-zinc-500" />
      </button>
    </div>
  );
}
