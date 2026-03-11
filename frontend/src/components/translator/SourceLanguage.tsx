"use client"

type Props = {
  source: string
  setSource: (value: string) => void
}

export default function SourceLanguage({ source, setSource }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">

      <label className="font-semibold">Source Language</label>

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="border p-2 rounded"
      >
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        <option>German</option>
      </select>

    </div>
  )
}