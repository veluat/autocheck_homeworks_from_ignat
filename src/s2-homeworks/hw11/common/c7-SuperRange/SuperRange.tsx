import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                height: 4,
                paddingBottom: 5,
                marginRight: 2,
                marginLeft: 2,
                color: '#00CC22',
                '& .MuiSlider-thumb: after': {
                    width: "6px",
                    height: "6px",
                    top: "50%",
                    left: "50%",
                    backgroundColor: '#52af77',
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
