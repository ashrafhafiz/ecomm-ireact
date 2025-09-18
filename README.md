```typescript
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
```

This code demonstrates a powerful pattern for type-safe data validation using Zod, a TypeScript-first schema validation library. Let me explain each part:

1. **Schema Definition**:

```typescript
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});
```

This creates a validation schema using Zod that defines the structure of a task object. Each field is specified with its type:

- `id`: must be a string
- `title`: must be a string
- `status`: must be a string
- `label`: must be a string
- `priority`: must be a string

2. **Type Inference**:

```typescript
export type Task = z.infer<typeof taskSchema>;
```

This is where the magic happens. The `z.infer` utility type automatically creates a TypeScript type based on the schema definition. The resulting `Task` type would be equivalent to:

```typescript
type Task = {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
};
```

The benefits of this approach are:

1. **Single Source of Truth**: You define your data structure once, and both the validation and the TypeScript type are derived from it.

2. **Type Safety**: You get compile-time type checking and runtime validation from the same definition.

3. **Maintainability**: If you need to change the structure, you only need to update the schema, and the type will automatically update accordingly.

4. **Validation**: You can use this schema to validate incoming data:

```typescript
const result = taskSchema.safeParse(someData);
if (result.success) {
  // data is valid and properly typed
  const task: Task = result.data;
} else {
  // handle validation errors
}
```

This pattern is particularly useful in applications where data integrity is crucial, such as when dealing with API responses, form inputs, or database operations.
