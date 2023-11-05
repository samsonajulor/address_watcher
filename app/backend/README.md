# Code Structure

- All services should follow the format in the codebase.Create as many services as you will need in the /service/{name}.ts. Try not to import a model from a controller.
- Validate all incoming requests using the /validations/{name}.ts
- Create a corresponding middleware for all validations and add it to the route.
- Do not define types inline. This is crazy to read. Instead, create a separate types file for each model or service eg. /@types/user.ts for the users. Here I place all types related to users eg admin, student, etc.
- Do not push console.logs. Use the logger(desc, message) from the config dir.
- When using envs check the toolbox for the sample import of env.
- There is already a multer config which writes to a cloudinary storage.
- Our response format should be:

```typescript
return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
          status: !!ResponseCode.FAILURE,
          message: error.message || ‘Something bad happened’,
          data: null,
        });
```

```typescript
return res.status(StatusCode.OK).json({
  status: !!ResponseCode.SUCCESS,
  message,
  data,
});
```
