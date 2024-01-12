'use client'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'

const EditTopicForm = ({description,title,id}) => {
    const router=useRouter()
    const formik=useFormik({
        initialValues:{
            newTitle:title,
            newDescription: description
            },
            onSubmit: async (values) => {
                if (!values.newTitle || !values.newDescription) {
                  alert("Please fill out all fields");
                  return;
                }
                try {
                  const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      newTitle: values.newTitle,
                      newDescription: values.newDescription,
                    }),
                  });
                  if (res.ok) {
                    router.push("/");
                    router.refresh()
                  }else{
                    throw new Error('Failed to create topic');
                  }
                } catch (error) {
                  console.log('Api Fetching Error: ',error);
                }
              },
    })
  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="mb-4 w-full">
      <label htmlFor="4ae87963-f6bb-41b8-8acb-c684a08b8a6b"></label>
      <input
        placeholder="Topic Title"
        type="text"
        name='newTitle'
        value={formik.values.newTitle}
        onChange={formik.handleChange}
        id="4ae87963-f6bb-41b8-8acb-c684a08b8a6b"
        className="w-full block border border-slate-500 dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div className="mb-4 w-full">
      <label htmlFor="6832807e-8b3c-443c-8b0c-aa394d8792d0"></label>
      <input
        placeholder="Topic Description"
        name='newDescription'
        value={formik.values.newDescription}
        onChange={formik.handleChange}
        type="text"
        id="6832807e-8b3c-443c-8b0c-aa394d8792d0"
        className="w-full block border border-slate-500 dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
      />
    </div>

    <button
      type="submit"
      className="block mb-4 w-fit  bg-green-600 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
    >
      Update Topic
    </button>
  </form>
  )
}

export default EditTopicForm
