import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Input from "../Input/Input"
import { AiOutlineBorderlessTable } from "react-icons/ai"
import { Switch } from "antd"
import { CheckOutlined } from "@ant-design/icons"
import "./AddChannelModal.scss"

const AddChannelModal = () => {
  const handleSubmit = () => {}
  return (
    <Formik
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        title: Yup.string().trim().required("Required"),
        desc: Yup.string()
      })}
    >
      {props => {
        const { values, isValid, handleChange, dirty } = props
        return (
          <div className="add-channel-modal">
            <p className="add-channel-modal__header-title">
              Channels are where your team communicates. They’re best when
              organized around a topic — #marketing, for example.
            </p>
            <div className="add-channel-modal__form-control">
              <Input
                placeholder="e.g. plan-budget"
                size="large"
                label="Name"
                prefix={<AiOutlineBorderlessTable />}
              />
            </div>
            <div className="add-channel-modal__form-control add-description">
              <Input size="large" label="Description" />
              <span className="add-description__content">
                What's this channel about?
              </span>
            </div>
            <div className="add-channel-modal__make-private">
              <div className="add-channel-modal__make-private__left">
                <p className="title">Make private</p>
                <p className="content">
                  When a channel is set to private, it can only be viewed or
                  joined by invitation.
                </p>
              </div>
              <div className="add-channel-modal__make-private__right">
                <Switch className="switch-icon" defaultChecked />
              </div>
              <div className="clear-fix"></div>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export default AddChannelModal
