//* Import express and initialize the routers
import express from 'express';
const router = express.Router();

//* Call the controller with the methods
import { getCompany, getCompanyById, createNewCompany, updateCompany, deleteOneCompany, deleteAllCompany } from '../controllers/companyController'

//* Here I defined the methods 
router.get('/', getCompany); //localhost:5000/company/
router.get('/id/:id', getCompanyById); //localhost:5000/company/id/1
router.post('/add', createNewCompany); //localhost:5000/company/add
router.put('/edit/:id', updateCompany); //localhost:5000/company/edit/1
router.delete('/delete/:id', deleteOneCompany); //localhost:5000/company/delete/1
router.delete('/deleteCompany', deleteAllCompany); //localhost:5000/company/deleteCompany

export default router;