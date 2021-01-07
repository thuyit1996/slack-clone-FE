import React from "react"
import { Modal, Button } from "antd"
import "./CommonModal.scss"
interface IProps {
  title: string
  centered?: boolean
  visible: boolean
  onCancel: (isOpen: boolean) => void
  onOk: (isOpen: boolean) => void
  children?: any
  width?: number
  isDisableButton?: boolean
}

const CommonModal: React.FC<IProps> = ({
  title,
  centered,
  visible,
  onCancel,
  onOk,
  children,
  width,
  isDisableButton
}) => {
  return (
    <Modal
      title={title}
      centered={centered}
      visible={visible}
      width={width}
      onCancel={() => onCancel(false)}
      onOk={() => onOk(false)}
      footer={[
        <Button
          className={`button-add ${isDisableButton ? "disabled" : "active"}`}
          disabled={isDisableButton}
        >
          Create
        </Button>
      ]}
    >
      {children}
    </Modal>
  )
}

export default CommonModal
