export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col rounded-lg bg-violet-50 px-4 py-5">
      <span className="text-sm font-medium text-violet-700">Used space</span>

      <div className="space-y-4 pt-1">
        <p className="text-sm font-normal text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>

        <div className="rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded-full bg-violet-600" />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-sm font-semibold text-violet-500 transition-all hover:text-violet-700"
          >
            Dismiss
          </button>

          <button
            type="button"
            className="text-sm font-semibold text-violet-700 transition-all hover:text-violet-900"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
}
