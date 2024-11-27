import { FormEnterpriseValues } from '../../models/form.models'
import { Control, Controller, FieldError } from 'react-hook-form'

interface Props {
  name: keyof FormEnterpriseValues
  control: Control<FormEnterpriseValues>
  label?: string
  type?: string
  error?: FieldError
}

const EnterpriseInput = ({ name, control, label, type, error }: Props) => {
  return (
    <div className='form-outline'>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className='form-control'
            placeholder={label}
            type={type}
            {...field}
          />
        )}
      />
      {error && <p className='text-danger'>{error.message}</p>}
    </div>
  )
}

export default EnterpriseInput
