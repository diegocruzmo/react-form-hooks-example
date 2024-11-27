import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomInput from '../CustomInput/CustomInput'
import { FormValues } from '../../models/form.models'
import { schema } from '../../models/form.models'

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      pass1: '',
      pass2: ''
    }
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name='name'
        control={control}
        label='Name'
        type='text'
        error={errors.name}
      />

      <CustomInput
        name='email'
        control={control}
        label='Email'
        type='text'
        error={errors.email}
      />

      <CustomInput
        name='pass1'
        control={control}
        label='Password'
        type='password'
        error={errors.pass1}
      />

      <CustomInput
        name='pass2'
        control={control}
        label='Repeat Password'
        type='password'
        error={errors.pass2}
      />

      <button type='submit'>Send</button>
    </form>
  )
}

export default CustomForm
