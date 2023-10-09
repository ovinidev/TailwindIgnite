import { Button } from "../Button";
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

      <Button variant="ghost" type="button">
        <Logout className="text-xl text-zinc-500" />
      </Button>
    </div>
  );
}
