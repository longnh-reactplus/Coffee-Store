import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';

interface IInputSelect {
  items: Array<string>;
  default: string;
  width: number;
}

const InputSelect: FC<IInputSelect> = (props) => {
  const [item, setItem] = React.useState<string[]>([]);
  const [text, setText] = React.useState<string>('#BBBBBB');
  const [color, setColor] = React.useState<string>('#FFF0F0');

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = event;
    setItem(typeof value === 'string' ? value.split(',') : value);
    if (event.target.value !== '') {
      setText('#000');
      setColor('#FFF');
    } else {
      setText('#BBBBBB');
      setColor('#FFF0F0');
    }
  };
  return (
    <>
      <Select
        displayEmpty
        value={item}
        onChange={handleChange}
        input={<OutlinedInput />}
        sx={{
          height: 60,
          width: props.width,
          color: `${text}`,
          backgroundColor: `${color}`,
        }}
      >
        <MenuItem value="">
          <Typography sx={{ color: '#BBBBBB' }}>{props.default}</Typography>
        </MenuItem>
        {props.items.map((item) => (
          <MenuItem key={item} value={item} sx={{ color: '#000' }}>
            <Typography>{item}</Typography>
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default InputSelect;
