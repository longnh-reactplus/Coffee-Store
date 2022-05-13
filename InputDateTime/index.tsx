import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import InputSelect from '../InputSelect';

const days = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const years = ['2022', '2023', '2024', '2025', '2026'];

function InputDateTime() {
  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <Box
          sx={{
            backgroundColor: '#F24451',
            height: 20,
            width: 36,
            borderRadius: 5,
          }}
        ></Box>
        <Box>
          <Typography>お借入れ希望日</Typography>
        </Box>
      </Stack>
      <Stack sx={{ pt: 8 }} direction="row" spacing={1}>
        <Stack sx={{ pr: '44px' }}>
          <Stack direction="row" spacing={1}>
            <InputSelect items={years} default="西暦" width={260} />
            <Stack sx={{ pt: 5, pl: 3 }}>
              <Typography>年</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ pr: '44px' }}>
          <Stack direction="row" spacing={1}>
            <InputSelect items={months} default="月" width={100} />
            <Stack sx={{ pt: 5, pl: 3 }}>
              <Typography>月</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ pr: '44px' }}>
          <Stack direction="row" spacing={1}>
            <InputSelect items={days} default="日" width={100} />
            <Stack sx={{ pt: 5, pl: 3 }}>
              <Typography>日</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default InputDateTime;
