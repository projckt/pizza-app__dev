import Joi from 'joi';

const schema_ReSend_EmailVerificationCode_Inputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const helper_Validate_ReSend_EmailVerificationCode_Inputs = (payload_ReSend_EmailVerificationCode_Inputs: object) => {
  let { error } = schema_ReSend_EmailVerificationCode_Inputs.validate(payload_ReSend_EmailVerificationCode_Inputs);

  if (error) {
    return { isValid_ReSend_EmailVerificationCode_Inputs: false, message_Validate_ReSend_EmailVerificationCode_Inputs: error.details[0].message };
  } else {
    return { isValid_ReSend_EmailVerificationCode_Inputs: true, message_Validate_ReSend_EmailVerificationCode_Inputs: '' };
  }
};
