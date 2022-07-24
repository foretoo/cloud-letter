import React, { CSSProperties, useContext } from "react"
import { CloudContext } from "./context"
import { CloudWordProps, SpanRef } from "./types"

export const CloudWord = ({
  children: content,
  idle = false
}: CloudWordProps) => {
  const { every, words, elementStyle } = useContext(CloudContext)

  return (
    <span
      className="word"
      style={elementStyle as CSSProperties}
      ref={(span: SpanRef) => {
        if (span) {
          if (idle) {
            span.style.margin = "0"
            span.style.padding = "var(--padding-idle)"
          }
          else {
            span.style.padding = "var(--padding)"
            span.style.margin = "var(--margin-partial)"
          }
          span.idle = idle
          !every.includes(span) && every.push(span!)
          !words.includes(span) && words.push(span!)
        }
      }}
    >
      {content}
    </span>
  )
}