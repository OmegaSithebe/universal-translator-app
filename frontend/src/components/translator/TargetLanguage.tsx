"use client"

type Props = {
  target: string
  setTarget: (value: string) => void
}

export default function TargetLanguage({ target, setTarget }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">

      <label className="font-semibold">Target Language</label>

      <select
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="border p-2 rounded"
      >
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
        <option>English</option>
      </select>

    </div>
  )
}