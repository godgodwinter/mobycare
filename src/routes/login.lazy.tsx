import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/login')({
  component: About,
})

function About() {
  return <div className="p-2">
    <Basic/>
  </div>
}

import * as React from 'react';
 import {
   Formik,
   Form,
   Field,
 } from 'formik';
 
 interface MyFormValues {
   firstName: string;
 }
 
  const Basic: React.FC<{}> = () => {
   const initialValues: MyFormValues = { firstName: '' };
   return (
     <div>
       <h1>My Example</h1>
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
       >
         <Form>
           <label htmlFor="firstName">First Name</label>
           <Field id="firstName" name="firstName" placeholder="First Name" className="input"/>
           <button type="submit" className='btn btn-info btn-sm'>Submit</button>
         </Form>
       </Formik>
     </div>
   );
 };