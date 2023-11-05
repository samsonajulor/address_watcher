import joi from './imports';

const user = {
  async sampleValidation(payload: any) {
    const schema = joi.object({
      firstname: joi.string().optional().label('Firstname'),
      gender: joi
        .string()
        .valid('male', 'female', 'prefer not to say')
        .optional()
        .label('Gender. Male, Female or Prefer not to say'),
      dob: joi
        .date()
        .format('YYYY-MM-DD')
        .allow('')
        .optional()
        .label('Date of birth. Format should be YYYY-MM-DD'),
      socialLinks: joi
        .object({
          twitter: joi.string().optional().label('twitter'),
          linkedin: joi.string().optional().label('linkedIn'),
          github: joi.string().optional().label('github'),
        })
        .optional()
        .label('social'),
    });
    const { error } = schema.validate(payload);
    if (error) throw error.details[0].context.label;
    return true;
  },
};

export default user;
