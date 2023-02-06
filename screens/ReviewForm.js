import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string().required.min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 -5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})


export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(value)
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.rating}
                            placeholder='Review rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />

                        <Button
                            title='Submit'
                            color='maroon'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}