import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';


export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
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