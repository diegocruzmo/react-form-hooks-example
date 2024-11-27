import { useForm, SubmitHandler } from 'react-hook-form'
import { FormEnterpriseValues } from '../../models/form.models'
import { schemaFormEnterprise } from '../../models/form.models'
import { zodResolver } from '@hookform/resolvers/zod'
import EnterpriseInput from '../EnterpriseInput/EnterpriseInput'

const EnterpriseForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormEnterpriseValues>({
    resolver: zodResolver(schemaFormEnterprise),
    defaultValues: {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phone: '',
      info: ''
    }
  })

  const onSubmit: SubmitHandler<FormEnterpriseValues> = (data) => {
    console.log(data)
  }

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row mb-4'>
          <div className='col'>
            <EnterpriseInput
              name='firstname'
              control={control}
              label='First Name'
              type='text'
              error={errors.firstname}
            />
          </div>
          <div className='col'>
            <EnterpriseInput
              name='lastname'
              control={control}
              label='Last Name'
              type='text'
              error={errors.lastname}
            />
          </div>
        </div>

        <div className='form-outline mb-4'>
          <EnterpriseInput
            name='address'
            control={control}
            label='Address'
            type='text'
            error={errors.address}
          />
        </div>

        <div className='form-outline mb-4'>
          <EnterpriseInput
            name='email'
            control={control}
            label='Email'
            type='text'
            error={errors.email}
          />
        </div>

        <div className='form-outline mb-4'>
          <EnterpriseInput
            name='phone'
            control={control}
            label='Phone'
            type='text'
            error={errors.phone}
          />
        </div>

        <div className='form-outline mb-4'>
          <EnterpriseInput
            name='info'
            control={control}
            label='Questions?'
            type='text'
            error={errors.info}
          />
        </div>

        <button type='submit' className='btn btn-primary btn-block mb-4'>
          Place order
        </button>
      </form>
    </div>
  )
}

export default EnterpriseForm
