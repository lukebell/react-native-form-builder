import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import MapQuestions from './MapQuestions';

const handleChange = (answer = {}, question, change) => {
    const res = Object.assign(answer, change);
    return {[question.name]: res};
};

const Form = ({answer, question, onChange}) => (
    <View>
        {question.form.map(row => (
            <View style={{flexDirection: 'row'}}>
                {row.questions.map(quest => (
                    <MapQuestions
                        key={quest.name.toString()}
                        chapter={answer}
                        question={quest}
                        onChange={change => onChange(handleChange(answer, question, change))}
                    />
                ))}
            </View>))}
    </View>
);

Form.propTypes = {
    answer: PropTypes.shape([]).isRequired,
    question: PropTypes.shape({
        form: PropTypes.shape([]).isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Form;
