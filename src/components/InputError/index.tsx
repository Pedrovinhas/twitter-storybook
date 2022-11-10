import errors from '../../utils/errors.json'

interface InputErrorProps {
    type: any;
    field: string;
}

export function InputError({ type, field }: InputErrorProps) {
    // @ts-expect-error
    return <span className='text-[#FF6961] text-sm'> {errors[field][type]} </span>
}