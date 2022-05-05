import Stack from '@mui/material/Stack';
import { ColorButton, BootstrapButton } from './styles';
import './styles.css'
import { Button } from '@mui/material';

export default function CustomButtom() {
  return (
    <Stack spacing={2} direction="row">
        <ColorButton variant="contained">Custom CSS</ColorButton>
        <BootstrapButton variant="contained" disableRipple>
          Bootstrap
        </BootstrapButton>
        <input
        type='text'
        placeholder='Email' 
        className='input-email'
       />
       <Button 
        className='btn-red'
        sx={{fontSize:18}}
       > 
         Meu Botao
       </Button>
    </Stack>
  );
}
