import { Container } from './styles'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function Paginations({setProps, pages}){
       const handleChange = (event, value) => {
           setProps(value)
      };
      
    return (
        <Container>
            <Stack spacing={2}>
                <Pagination count={pages} color="primary" defaultPage={1} onChange={handleChange} />
            </Stack>
        </Container>
    )
}