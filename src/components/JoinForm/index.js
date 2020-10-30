import React, { useState, useCallback } from 'react';
import { Formik, Field, Form } from 'formik';

import joinValidation from '../../util/joinValidation';
import Error from './Error';

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
      validationSchema={joinValidation}
    >
      {({ touched, errors }) => (
        <Form>
          <div className="flex flex-wrap">
            <label className="marg-b-3" htmlFor="email">
              <div>
                <strong>Email</strong>
              </div>
              <Field id="email" name="email" placeholder="you@zmail.io" />
              <Error field="email" touched={touched} errors={errors} />
            </label>

            <label className="marg-b-3" htmlFor="name">
              <div>
                <strong>Last Name</strong>
              </div>
              <Field id="name" name="name" placeholder="Zane Myth" />
              <Error field="name" touched={touched} errors={errors} />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
            <br />
            {submitting ? 'submitting' : JSON.stringify(formData)}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JoinForm;
