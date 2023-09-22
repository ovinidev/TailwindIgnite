import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Email } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm duration-150 ease-in hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-zinc-50 shadow-sm duration-150 ease-in hover:bg-violet-700"
              form="settings"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 border-t border-zinc-200"
        >
          <div className="mt-6 grid grid-cols-form gap-3">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinícius" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Medeiros" />
              </Input.Root>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix icon={Email} htmlFor="email" />
              <Input.Control
                id="email"
                type="email"
                defaultValue="vini@gmail.com"
              />
            </Input.Root>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="photo"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" type="role" defaultValue="CTO" />
            </Input.Root>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>

            <div></div>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>

            <Input.Root>
              <Input.Control id="role" type="role" defaultValue="CTO" />
            </Input.Root>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label className="text-sm font-medium text-zinc-700" htmlFor="bio">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div></div>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="portfolio"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
            </FileInput.Root>
            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-6">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm duration-150 ease-in hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-zinc-50 shadow-sm duration-150 ease-in hover:bg-violet-700"
              form="settings"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
