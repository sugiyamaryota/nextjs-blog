import React from "react"
import Markdown from "react-markdown"
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ main }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        <Markdown children={main} />
      </div>
    </div>
  )
}
