import { Stack } from "@mui/material"
import { categories } from "../utils/constants" 

function Sidbar() {
  const selectedCategory = 'New';
  return (
<Stack direction="row" sx={{
    overflowY: "auto",
height: {sx: 'auto', md: '95%'},
flexDirection: {md: 'column'},
}}>
    {categories.map((category) => (
       <button
       className="category-btn"
       style={{
        backgroundColor: category.name === 
        selectedCategory && '#FC1503',
        color: 'white'
       }}
       key={category.name}
       >
         <span style={{
          color: category.name === selectedCategory ? 'white' : 'red'
         }}>{category.icon}</span>
        <span>{category.name}</span>
       </button>
    ))}
    
</Stack>
    )
}

export default Sidbar