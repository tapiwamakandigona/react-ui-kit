import { useState, useCallback } from "react";

type ValidationRule<T> = {
  validate: (value: T[keyof T], values: T) => boolean;
  message: string;
};

type FormConfig<T> = {
  initialValues: T;
  validations?: Partial<Record<keyof T, ValidationRule<T>[]>>;
  onSubmit: (values: T) => void | Promise<void>;
};

/**
 * Form state management with validation.
 * 
 * @example
 * const form = useForm({
 *   initialValues: { email: "", password: "" },
 *   validations: {
 *     email: [{ validate: v => v.includes("@"), message: "Invalid email" }],
 *     password: [{ validate: v => v.length >= 8, message: "Min 8 chars" }],
 *   },
 *   onSubmit: (values) => console.log(values),
 * });
 */
export function useForm<T extends Record<string, any>>(config: FormConfig<T>) {
  const [values, setValues] = useState<T>(config.initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);

  const setValue = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const setFieldTouched = useCallback((field: keyof T) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let valid = true;

    if (config.validations) {
      for (const [field, rules] of Object.entries(config.validations)) {
        if (!rules) continue;
        for (const rule of rules as ValidationRule<T>[]) {
          if (!rule.validate(values[field as keyof T], values)) {
            newErrors[field as keyof T] = rule.message;
            valid = false;
            break;
          }
        }
      }
    }

    setErrors(newErrors);
    return valid;
  }, [values, config.validations]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    
    setSubmitting(true);
    try {
      await config.onSubmit(values);
    } finally {
      setSubmitting(false);
    }
  }, [values, validate, config.onSubmit]);

  const reset = useCallback(() => {
    setValues(config.initialValues);
    setErrors({});
    setTouched({});
  }, [config.initialValues]);

  return {
    values, errors, touched, submitting,
    setValue, setFieldTouched, handleSubmit, reset,
    getFieldProps: (field: keyof T) => ({
      value: values[field],
      onChange: (e: any) => setValue(field, e.target.value),
      onBlur: () => setFieldTouched(field),
      error: touched[field] ? errors[field] : undefined,
    }),
  };
}
