import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"

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
          </div>
        )
      }}
    </Formik>
  )
}

export default AddChannelModal
