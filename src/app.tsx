import { FormEvent, useState } from "react"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text1, text2 } from "./component/text"

const width = window.innerWidth
const mineText = "Initial Text  For   Cloudy    Lettering"

export const App = () => {

  const [ content, setContent ] = useState(mineText)
  const [ mode, setMode ] = useState<"WORD" | "SPACE">("WORD")
  const [ spaceWidth, setSpaceWidth ] = useState(40)

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    setContent(target.value)
  }
  const handleModeChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setMode(target.value as "WORD" | "SPACE")
  }
  const handleRangeChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setSpaceWidth(+target.value)
  }

  return (
    <>
      <CloudLetter
        width={Math.min(width*0.8, 1024)}
        spaceWidth={spaceWidth}
        mode={mode}
      >
        {content}
        {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
      </CloudLetter>

      <form className="controls">
        <fieldset className="controls-row">
          <span>mode:</span>
          <label>
            <input
              type="radio"
              name="mode"
              value="WORD"
              checked={mode === "WORD"}
              onChange={handleModeChange}
            />
            WORD
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="SPACE"
              checked={mode === "SPACE"}
              onChange={handleModeChange}
            />
            SPACE
          </label>
        </fieldset>

        <textarea
          rows={5}
          cols={Math.min(width/15|0, 55)}
          value={content}
          autoFocus={true}
          onInput={handleInput}
        />

        <fieldset className="controls-row">
          <label>
            <span>space width</span>
            <input
              type="range"
              min={0}
              max={100}
              value={spaceWidth}
              onInput={handleRangeChange}
            />
          </label>
        </fieldset>
      </form>
    </>
  )
}