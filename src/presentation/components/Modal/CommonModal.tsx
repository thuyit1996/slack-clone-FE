import React from "react"
import { Modal } from "antd"
import "./CommonModal.scss"
interface IProps {
  title: string
  centered?: boolean
  visible: boolean
  onOk: (isOpen: boolean) => void
  onCancel: (isOpen: boolean) => void
  children?: any
  width?: number
}

const CommonModal: React.FC<IProps> = ({
  title,
  centered,
  visible,
  onOk,
  onCancel,
  children,
  width
}) => {
  return (
    <Modal
      title={title}
      centered={centered}
      visible={visible}
      width={width}
      onOk={() => onOk(false)}
      onCancel={() => onCancel(false)}
    >
      {children}
    </Modal>
  )
}

export default CommonModal
