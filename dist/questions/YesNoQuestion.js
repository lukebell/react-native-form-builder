Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var YesNoQuestion=function YesNoQuestion(_ref){var answer=_ref.answer,question=_ref.question,onChange=_ref.onChange;var change=function change(value){return onChange({target:{name:question.name,value:value}});};return null;{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}};YesNoQuestion.propTypes={answer:_propTypes2.default.bool,onChange:_propTypes2.default.func.isRequired,question:_propTypes2.default.shape({}).isRequired};YesNoQuestion.defaultProps={answer:null};exports.default=YesNoQuestion;