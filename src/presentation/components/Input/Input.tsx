import React from "react"
import { Input as InputElement } from "antd"
import "./Input.scss"

interface IProps {
  size: "small" | "middle" | "large" | undefined
  placeholder?: string
  prefix?: any
  label: string
}

const Input: React.FC<IProps> = ({ placeholder, size, prefix, label }) => {
  return (
    <div className="input-element">
      <span className="input-element__label">{label}</span>
      <InputElement
        className="input-element__content"
        size={size}
        placeholder={placeholder}
        prefix={prefix}
      />
    </div>
  )
}

export default Input
