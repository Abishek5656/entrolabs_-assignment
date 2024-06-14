import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Medicine } from "../models/medicine.model.js";




const getRecords = asyncHandler( async(req, res) => {

  const medicineRecords = await Medicine.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        manufacturer: 1,
        skuType: 1,
        skuId: 1,
        skuLabel: 1,
        composition: 1,
        quantity: 1,
        price: 1
      }
    }
  ]);
  

   if(medicineRecords.length === 0) {
     return res.status(400).json(new ApiError(400, "Medicine Records Not Found"))
   }

   return res.status(200).json(new ApiResponse(200,  medicineRecords))
})


const createMedicine = asyncHandler(async (req, res) => {
  const {
    name,
    manufacturer,
    skuType,
    skuId,
    skuLabel,
    composition,
    quantity,
    price,
  } = req.body;

  const existingMedicine = await Medicine.findOne({ skuId: skuId });

  if (existingMedicine) {
    return res.status(400).json(new ApiError(400, "Already Medicine Exist"));
  }

  // Create the Medicine
  const medicine = await Medicine.create({
    name,
    manufacturer,
    skuType,
    skuLabel,
    skuId,
    composition,
    quantity,
    price,
  });

  // Check if the  medicine was successfully created
  if (!medicine) {
    return res.status(400).json(new ApiError(400, "Failed to create medicine"))

  }

  // Return the response
  return res
    .status(201)
    .json(new ApiResponse(201,{} ,"Medicine successfully saved"));
});


export { createMedicine, getRecords };
