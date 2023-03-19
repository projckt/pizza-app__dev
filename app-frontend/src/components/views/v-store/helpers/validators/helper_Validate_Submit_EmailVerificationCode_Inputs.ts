import Joi from 'joi';

const schema_Submit_EmailVerificationCode_Inputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  code_EmailVerification: Joi.number().min(1000).max(9999).required(),
});

export const helper_Validate_Submit_EmailVerificationCode_Inputs = (payload_Submit_EmailVerificationCode_Inputs: object) => {
  let { error } = schema_Submit_EmailVerificationCode_Inputs.validate(payload_Submit_EmailVerificationCode_Inputs);

  if (error) {
    return { isValid_Submit_EmailVerificationCode_Inputs: false, message_Validate_Submit_EmailVerificationCode_Inputs: error.details[0].message };
  } else {
    return { isValid_Submit_EmailVerificationCode_Inputs: true, message_Validate_Submit_EmailVerificationCode_Inputs: '' };
  }
};
