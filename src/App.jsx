import { useColorScheme } from '@mui/material'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Container from '@mui/material/Container'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl size='small'>
      <InputLabel id='mode-theme-label'>Mode</InputLabel>
      <Select
        labelId='mode-theme-label'
        id='mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
        <MenuItem value='system'>System</MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: 'primary.main' }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: '48px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeToggle />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: '58px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: 'calc(100vh - 58px - 48px)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Content
      </Box>
    </Container>
  )
}

export default App
