import Joi from 'joi';
import joiDate from '@joi/date';

const joi = Joi.extend(joiDate);

export default joi;
