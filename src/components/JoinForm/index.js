import React, { useState, useCallback } from 'react';
import { Formik, Field, Form } from 'formik';

const JoinForm = () => {
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async value => {
      setSubmitting(true);
      return new Promise(resolve =>
        setTimeout(() => {
          setSubmitting(false);
          resolve(setFormData(value));
        }, 500)
      );
    },
    [setFormData]
  );

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label className="marg-b-3" htmlFor="email">
          <div>
            <strong>Email</strong>
          </div>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="you@zmail.io"
          />
        </label>

        <label className="marg-b-3" htmlFor="name">
          <div>
            <strong>Last Name</strong>
          </div>
          <Field id="name" name="name" placeholder="Zane Myth" />
        </label>

        <button type="submit">Submit</button>
        <div>{submitting ? 'submitting' : JSON.stringify(formData)}</div>
      </Form>
    </Formik>
  );
};

export default JoinForm;
