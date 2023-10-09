import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Form/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Email } from "@/components/Icons";
import { RadixSelect } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { BiBold, BiItalic, BiLink } from "react-icons/bi";
import { TextArea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button form="settings" type="submit">
              Save
            </Button>
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

            <div>
              <RadixSelect placeholder="Select a country">
                <SelectItem
                  className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                  value="br"
                  text="Brasil"
                />
                <SelectItem
                  className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                  value="es"
                  text="Espanha"
                />
                <SelectItem
                  className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                  value="pt"
                  text="Portugal"
                />
              </RadixSelect>
            </div>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>

            <RadixSelect placeholder="Select a timezone">
              <SelectItem
                className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem
                className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                value="utc3"
                text="America São Paulo (UTC-03:00)"
              />
            </RadixSelect>
            <div />
          </div>

          <div className="mt-6 grid grid-cols-form gap-3 pt-6">
            <label className="text-sm font-medium text-zinc-700" htmlFor="bio">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <RadixSelect placeholder="Select" defaultValue="normal">
                  <SelectItem
                    className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                    value="normal"
                    text="Normal Text"
                  />
                  <SelectItem
                    className="cursor-pointer px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
                    value="md"
                    text="Markdown"
                  />
                </RadixSelect>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <BiItalic className="text-xl text-zinc-500" />
                  </Button>
                  <Button variant="ghost" type="button">
                    <BiBold className="text-xl text-zinc-500" />
                  </Button>
                  <Button variant="ghost" type="button">
                    <BiLink className="text-xl text-zinc-500" />
                  </Button>
                </div>
              </div>

              <TextArea id="bio" defaultValue="I'm frontend developer" />
            </div>
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
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-6">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button form="settings" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
