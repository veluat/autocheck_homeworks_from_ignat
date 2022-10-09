import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const getClassName = ({disabled, xType, additionalClassName}: {disabled?: boolean, xType?: string, additionalClassName?: string}) => {
    let className = s.button
    if(!disabled && !xType) return `${s.button} ${s.default} ${additionalClassName}`
    if (disabled) className = className + ' ' + s.disabled
    if (xType === 'red') className = className + ' ' + s.red
    if (xType === 'secondary') className = className + ' ' + s.secondary
    return `${className} ${additionalClassName}`
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = getClassName({disabled, xType, additionalClassName: className })
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
