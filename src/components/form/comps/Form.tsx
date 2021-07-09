import React from 'react'
import { Formik } from 'formik'

export function AppForm(props: any) {
	return (
		<Formik
			initialValues={props.initialValues}
			onSubmit={props.onSubmit}
			validationSchema={props.validationSchema}
		>
			{() => <>{props.children}</>}
		</Formik>
	)
}
