import Button from '@mui/material/Button';
import './styles.css';
import CustomCard from '../../components/CustomCard'
import CustomTable from '../../components/CustomTable';
import CustomAutoComplete from '../../components/CustomAutoComplete'
import CustomSteper from '../../components/CustomSteper'
import AddUserDialog from '../../components/AddUserDialog'
import {useState} from 'react';
import Loading from '../../components/Loading'

function Main() {
  
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

    const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="container-main">      
    <Loading />
      <Button 
        variant="contained"
        onClick={handleClickOpen}        
      >
        Cadastrar Usuário
      </Button>
     <AddUserDialog 
      open={open}
      handleClose={handleClose}
     />
    </div>
  );
}

export default Main;
 