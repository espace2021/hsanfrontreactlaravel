import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//npm i --save react-lazy-load-image-component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Affichecategories = ({categories,setCategories})  => {
    const deleteCategorie = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
          return;
        }
    
        axios.delete(`https://backendecomgs1.vercel.app/api/api/categories/${id}`)
          .then(() => {
            console.log('successfully deleted!')
            setCategories(categories.filter((cat) => cat.id !== id));
          }).catch((error) => {
            console.log(error)
          })
    
      }




const navigate=useNavigate()
    const columns = useMemo(
        () => [
            {
                accessorKey: 'imagecategorie', 
                header: 'Image',
                Cell: ({ cell }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                     <LazyLoadImage
                                alt="image"
                                height={200}
                                src={cell.getValue()} 
                                width={80} 
                                effect="blur"
                                wrapperProps={{
                                    // If you need to, you can tweak the effect transition using the wrapper style.
                                    style: {transitionDelay: "1s"},
                                }}
                                />
                        </Box>),
            },
            {
                accessorKey: 'nomcategorie', 
                header: 'Nom Catégorie',
                size: 100,
            },
            
            
            {
                accessorKey: 'id',
                header: 'actions',
                size: 10,
                Cell: ({ cell, row }) => (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <Button
                        onClick={() => {navigate (`/categories/edit/${cell.row.original.id}`)}}
                            
                            variant="contained"
                            color="warning"
                            style={{ fontSize: '20px', padding: '12px 24px' }}
                           >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Button>
                        <Button
                           
                            onClick={() => {deleteCategorie(cell.row.original.id)}}
                            variant="contained"
                            color="error"
                            style={{ fontSize: '20px', padding: '12px 24px' }}
                           >
                            <i className="fa fa-trash"></i>
                        </Button>
                    </div>
                )
                
            },
        ],
        [categories],
    );

    const table = useMaterialReactTable({
        columns,
        data : categories
      });

  return (
    <div className='container'>
     {categories && categories.length > 0 && <MaterialReactTable table={table} /> } 
    </div>
  )
}

export default Affichecategories
