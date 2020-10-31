/* eslint-disable jsx-a11y/label-has-associated-control */
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
        social_media_1: '',
        social_media_2: '',
        company_name: '',
        referrer: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={joinValidation}
    >
      {({ touched, errors }) => (
        <Form>
          <div className="flex flex-wrap marg-b-2">
            <label className="marg-b-4" htmlFor="email">
              <div>
                <strong>Email</strong>
              </div>
              <Field id="email" name="email" placeholder="you@zmail.io" />
              <Error field="email" touched={touched} errors={errors} />
            </label>

            <label className="marg-b-4" htmlFor="name">
              <div>
                <strong>Name</strong>
              </div>
              <Field id="name" name="name" placeholder="Zane Myth" />
              <Error field="name" touched={touched} errors={errors} />
            </label>
          </div>

          <div className="flex flex-wrap marg-b-2">
            <div className="marg-b-2">
              <b>Please provide two links to social media handles.</b>
              <div>
                We need a way to validate that you meet the membership
                requirements laid out{' '}
                <a href="https://www.techworkerscoalition.org/community-guide#membership">
                  here
                </a>
                . Linkedin is preferred, but anything that allows us to verify
                that you aren&apos;t a manager, journalist, etc is acceptable.
              </div>
            </div>
            <label className="marg-b-4" htmlFor="email">
              <Field
                id="social_media_1"
                name="social_media_1"
                placeholder="LinkedIn/Twitter/etc"
              />
              <Error field="social_media_1" touched={touched} errors={errors} />
            </label>

            <label className="marg-b-4" htmlFor="name">
              <Field
                id="social_media_2"
                name="social_media_2"
                placeholder="LinkedIn/Twitter/etc"
              />
              <Error field="social_media_2" touched={touched} errors={errors} />
            </label>
          </div>

          <div className="flex flex-wrap marg-b-2">
            <label className="marg-b-4" htmlFor="email">
              <div>
                <strong>Company Name (optional)</strong>
                <br />
                Including a company name helps us vet you.
              </div>
              <Field
                id="company_name"
                name="company_name"
                placeholder="Pluto Inc."
              />
              <Error field="company_name" touched={touched} errors={errors} />
            </label>
          </div>

          <div className="flex flex-wrap marg-b-2">
            <label className="marg-b-4" htmlFor="email">
              <div>
                <strong>How Did You Here About Us? (optional)</strong>
                <br />
                <div>
                  Including a referrer from an existing member can be a good way
                  to get in the slack if you lack a social media presence. Also,
                  please be specific! If you found us on search, don&apos;t just
                  say &ldquo;Google&rdquo; (it&apos;s unclear if you mean the
                  company or the search engine).
                </div>
              </div>
              <Field id="referrer" name="referrer" placeholder="" />
              <Error field="referrer" touched={touched} errors={errors} />
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